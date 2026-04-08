package com.cypher.backend.application.service;

import com.cypher.backend.application.dto.auth.AuthDtos.*;
import com.cypher.backend.domain.exception.*;
import com.cypher.backend.domain.model.RefreshToken;
import com.cypher.backend.domain.model.Role;
import com.cypher.backend.domain.model.User;
import com.cypher.backend.domain.port.RefreshTokenRepository;
import com.cypher.backend.domain.port.RoleRepository;
import com.cypher.backend.domain.port.UserRepository;
import com.cypher.backend.infrastructure.security.JwtService;
import com.cypher.backend.infrastructure.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository       userRepository;
    private final RoleRepository       roleRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder      passwordEncoder;
    private final JwtService           jwtService;
    private final AuthenticationManager authenticationManager;
    private final EmailService         emailService;

    @Value("${app.jwt.refresh-expiration-ms}")
    private long refreshExpirationMs;

    @Transactional
    public MessageResponse register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.email()))
            throw new UserAlreadyExistsException("email", req.email());

        if (userRepository.existsByUsername(req.username()))
            throw new UserAlreadyExistsException("username", req.username());

        Role userRole = roleRepository.findByName("ROLE_USER")
            .orElseThrow(() -> new CypherException("Default role not found"));

        User user = User.builder()
            .username(req.username())
            .email(req.email())
            .passwordHash(passwordEncoder.encode(req.password()))
            .isActive(true)
            .enabled(true)
            .build();

        user.addRole(userRole);
        userRepository.save(user);

        log.info("New user registered: {}", req.email());
        return new MessageResponse("User registered successfully.");
    }

    @Transactional
    public AuthResponse login(LoginRequest req) {
        Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(req.email(), req.password())
        );

        UserDetailsImpl userDetails = (UserDetailsImpl) auth.getPrincipal();

        if (!userDetails.getUser().getIsActive()) {
            throw new AccountDisabledException();
        }

        User user = userDetails.getUser();
        user.setLastLogin(LocalDateTime.now());
        userRepository.save(user);

        refreshTokenRepository.revokeAllByUserId(user.getId());
        String rawRefresh = UUID.randomUUID().toString();
        RefreshToken refreshToken = RefreshToken.builder()
            .token(rawRefresh)
            .user(user)
            .expiresAt(LocalDateTime.now().plusNanos(refreshExpirationMs * 1_000_000))
            .build();
        refreshTokenRepository.save(refreshToken);

        String accessToken = jwtService.generateToken(userDetails);
        UserInfo userInfo = buildUserInfo(user);

        log.info("User logged in: {}", user.getEmail());
        return AuthResponse.of(accessToken, rawRefresh, userInfo);
    }

    @Transactional
    public AuthResponse refresh(RefreshRequest req) {
        RefreshToken storedToken = refreshTokenRepository.findByToken(req.refreshToken())
            .orElseThrow(() -> new InvalidTokenException("Refresh token not found."));

        if (!storedToken.isValid()) {
            throw new InvalidTokenException("Refresh token expired or revoked.");
        }

        User user = storedToken.getUser();

        if (!user.getIsActive()) {
            throw new AccountDisabledException();
        }

        storedToken.setRevoked(true);
        refreshTokenRepository.save(storedToken);

        String newRaw = UUID.randomUUID().toString();
        RefreshToken newRefresh = RefreshToken.builder()
            .token(newRaw)
            .user(user)
            .expiresAt(LocalDateTime.now().plusNanos(refreshExpirationMs * 1_000_000))
            .build();
        refreshTokenRepository.save(newRefresh);

        UserDetailsImpl userDetails = UserDetailsImpl.build(user);
        String accessToken = jwtService.generateToken(userDetails);

        return AuthResponse.of(accessToken, newRaw, buildUserInfo(user));
    }

    @Transactional
    public MessageResponse forgotPassword(ForgotPasswordRequest req) {
        userRepository.findByEmail(req.email()).ifPresent(user -> {
            String token = UUID.randomUUID().toString();
            user.setResetPasswordToken(token);
            user.setResetPasswordExpires(LocalDateTime.now().plusMinutes(30));
            userRepository.save(user);
            emailService.sendPasswordResetEmail(user.getEmail(), token);
            log.info("Password reset requested for: {}", user.getEmail());
        });

        return new MessageResponse("If that email is registered, you will receive a reset link.");
    }

    @Transactional
    public MessageResponse resetPassword(ResetPasswordRequest req) {
        User user = userRepository.findByResetPasswordToken(req.token())
            .orElseThrow(InvalidTokenException::new);

        if (!user.hasValidResetToken(req.token())) {
            throw new InvalidTokenException("Reset token has expired.");
        }

        user.setPasswordHash(passwordEncoder.encode(req.newPassword()));
        user.clearResetToken();

        refreshTokenRepository.revokeAllByUserId(user.getId());
        userRepository.save(user);

        log.info("Password reset completed for: {}", user.getEmail());
        return new MessageResponse("Password has been reset successfully.");
    }

    private UserInfo buildUserInfo(User user) {
        List<String> roles = user.getRoles().stream()
            .map(Role::getName)
            .toList();
        return new UserInfo(
            user.getId().toString(),
            user.getUsername(),
            user.getEmail(),
            roles
        );
    }
}
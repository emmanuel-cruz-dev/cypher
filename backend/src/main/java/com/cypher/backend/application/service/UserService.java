package com.cypher.backend.application.service;

import com.cypher.backend.application.dto.user.UserDtos.*;
import com.cypher.backend.domain.exception.ResourceNotFoundException;
import com.cypher.backend.domain.model.Role;
import com.cypher.backend.domain.model.User;
import com.cypher.backend.domain.port.RefreshTokenRepository;
import com.cypher.backend.domain.port.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository         userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder        passwordEncoder;

    @Transactional(readOnly = true)
    public List<UserResponse> findAll() {
        return userRepository.findAll().stream()
            .map(this::toResponse)
            .toList();
    }

    @Transactional(readOnly = true)
    public UserResponse findById(UUID id) {
        return userRepository.findById(id)
            .map(this::toResponse)
            .orElseThrow(() -> new ResourceNotFoundException("User", id));
    }

    @Transactional
    public UserResponse updateStatus(UUID id, UpdateStatusRequest req) {
        User user = userRepository.findById(id)
           .orElseThrow(() -> new ResourceNotFoundException("User", id));

        user.setIsActive(req.isActive());

        if (!req.isActive()) {
            refreshTokenRepository.revokeAllByUserId(id);
            log.info("Admin deactivated user: {} — all tokens revoked", user.getEmail());
        } else {
            log.info("Admin activated user: {}", user.getEmail());
        }

        return toResponse(userRepository.save(user));
    }

    @Transactional
    public void changePassword(UUID userId, ChangePasswordRequest req) {
        User user = userRepository.findById(userId)
           .orElseThrow(() -> new ResourceNotFoundException("User", userId));

        if (!passwordEncoder.matches(req.currentPassword(), user.getPasswordHash())) {
            throw new com.cypher.backend.domain.exception.CypherException("Current password is incorrect.");
        }

        user.setPasswordHash(passwordEncoder.encode(req.newPassword()));
        refreshTokenRepository.revokeAllByUserId(userId);
        userRepository.save(user);

        log.info("User {} changed their password", user.getEmail());
    }

    private UserResponse toResponse(User u) {
        List<String> roles = u.getRoles().stream()
            .map(Role::getName)
            .toList();
        return new UserResponse(
            u.getId(),
            u.getUsername(),
            u.getEmail(),
            u.getIsActive(),
            u.getEnabled(),
            u.getLastLogin(),
            u.getCreatedAt(),
            roles
        );
    }
}

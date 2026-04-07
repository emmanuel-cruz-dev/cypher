package com.cypher.backend.application.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class AuthDtos {

    public record RegisterRequest(
        @NotBlank @Size(min = 3, max = 50)
        String username,

        @NotBlank @Email
        String email,

        @NotBlank @Size(min = 8, max = 100)
        String password
    ) {}

    public record LoginRequest(
        @NotBlank @Email
        String email,

        @NotBlank
        String password
    ) {}

    public record AuthResponse(
        String accessToken,
        String refreshToken,
        String tokenType,
        UserInfo user
    ) {
        public static AuthResponse of(String access, String refresh, UserInfo user) {
            return new AuthResponse(access, refresh, "Bearer", user);
        }
    }

    public record UserInfo(
        String id,
        String username,
        String email,
        java.util.List<String> roles
    ) {}

    public record RefreshRequest(
        @NotBlank
        String refreshToken
    ) {}

    public record ForgotPasswordRequest(
        @NotBlank @Email
        String email
    ) {}

    public record ResetPasswordRequest(
        @NotBlank
        String token,

        @NotBlank @Size(min = 8, max = 100)
        String newPassword
    ) {}

    public record MessageResponse(String message) {}
}

package com.cypher.backend.application.dto.user;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class UserDtos {

    public record UserResponse(
        UUID id,
        String username,
        String email,
        Boolean isActive,
        Boolean enabled,
        LocalDateTime lastLogin,
        LocalDateTime createdAt,
        List<String> roles
    ) {}

    public record UpdateStatusRequest(
        Boolean isActive
    ) {}

    public record ChangePasswordRequest(
        String currentPassword,
        String newPassword
    ) {}
}
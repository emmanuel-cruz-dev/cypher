package com.cypher.backend.domain.port;

import com.cypher.backend.domain.model.User;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository {

    User save(User user);

    Optional<User> findById(UUID id);

    Optional<User> findByEmail(String email);

    Optional<User> findByUsername(String username);

    Optional<User> findByResetPasswordToken(String token);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);

    java.util.List<User> findAll();
}
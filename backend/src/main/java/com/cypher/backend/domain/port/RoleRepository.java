package com.cypher.backend.domain.port;

import com.cypher.backend.domain.model.Role;

import java.util.Optional;

public interface RoleRepository {
    Optional<Role> findByName(String name);
}
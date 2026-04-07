package com.cypher.backend.domain.exception;

public class UserAlreadyExistsException extends CypherException {
    public UserAlreadyExistsException(String field, String value) {
        super("User already exists with " + field + ": " + value);
    }
}

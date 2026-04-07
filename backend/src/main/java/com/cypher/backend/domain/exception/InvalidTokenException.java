package com.cypher.backend.domain.exception;

public class InvalidTokenException extends CypherException {
    public InvalidTokenException(String message) {
        super(message);
    }
    public InvalidTokenException() {
        super("Token is invalid or has expired.");
    }
}
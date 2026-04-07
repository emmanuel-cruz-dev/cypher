package com.cypher.backend.domain.exception;

public class CypherException extends RuntimeException {
    public CypherException(String message) { super(message); }
    public CypherException(String message, Throwable cause) { super(message, cause); }
}
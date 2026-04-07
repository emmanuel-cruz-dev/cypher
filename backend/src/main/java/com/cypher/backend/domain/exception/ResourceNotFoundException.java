package com.cypher.backend.domain.exception;

public class ResourceNotFoundException extends CypherException {
    public ResourceNotFoundException(String resource, Object id) {
        super(resource + " not found with id: " + id);
    }
    public ResourceNotFoundException(String message) {
        super(message);
    }
}

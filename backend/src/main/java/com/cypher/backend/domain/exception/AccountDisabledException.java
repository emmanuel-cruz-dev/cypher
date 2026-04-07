package com.cypher.backend.domain.exception;

public class AccountDisabledException extends CypherException {
    public AccountDisabledException() {
        super("Account is disabled. Contact support.");
    }
}
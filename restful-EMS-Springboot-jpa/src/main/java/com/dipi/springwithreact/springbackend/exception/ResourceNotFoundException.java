package com.dipi.springwithreact.springbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;
    public ResourceNotFoundException(String message) {
    	super(message); // simply pass this message to the super class
    }
}

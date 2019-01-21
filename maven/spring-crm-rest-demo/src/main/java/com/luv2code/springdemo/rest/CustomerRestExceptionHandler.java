package com.luv2code.springdemo.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomerRestExceptionHandler {

    @ExceptionHandler
    public ResponseEntity handle(CustomerNotFoundException ex) {
        return new ResponseEntity(new CustomerErrorResponse(HttpStatus.NOT_FOUND.value(),
                ex.getMessage()), HttpStatus.NOT_FOUND);
    }
     @ExceptionHandler
    public ResponseEntity handle(Exception ex) {
        return new ResponseEntity(new CustomerErrorResponse(HttpStatus.BAD_REQUEST.value(),
                ex.getMessage()), HttpStatus.BAD_REQUEST);
    }

}

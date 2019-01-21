package com.luv2code.springdemo.rest;

import lombok.Data;

@Data
public class CustomerErrorResponse {

    private int status;
    private String message;
    private long timeStamp = System.currentTimeMillis();

    public CustomerErrorResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

}

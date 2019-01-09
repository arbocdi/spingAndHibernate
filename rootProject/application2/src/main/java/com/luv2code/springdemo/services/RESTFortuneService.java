
package com.luv2code.springdemo.services;

import org.springframework.stereotype.Component;

@Component
public class RESTFortuneService implements FortuneService{

    @Override
    public String getFortune() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}

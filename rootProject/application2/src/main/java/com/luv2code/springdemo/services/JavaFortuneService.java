
package com.luv2code.springdemo.services;


public class JavaFortuneService implements FortuneService {

    @Override
    public String getFortune() {
        return "Today is Java day!";
    }

}

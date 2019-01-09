
package com.luv2code.springdemo.coaches;

import org.springframework.stereotype.Component;

@Component("body")
public class BodyBuildingCoach implements Coach {

    @Override
    public String getDailyWorkout() {
        return "Train arms for 1 hour.";
    }

    @Override
    public String getDailyFortune() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}

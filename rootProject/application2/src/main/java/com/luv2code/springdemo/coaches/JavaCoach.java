package com.luv2code.springdemo.coaches;

import com.luv2code.springdemo.services.FortuneService;

public class JavaCoach implements Coach {

    private FortuneService fortuneService;

    public JavaCoach(FortuneService fortuneService) {
        this.fortuneService = fortuneService;
    }

    @Override
    public String getDailyWorkout() {
        return "Practise Java for 4 hours";
    }

    @Override
    public String getDailyFortune() {
        return fortuneService.getFortune();
    }

}

package com.luv2code.springdemo.coaches;

import com.luv2code.springdemo.services.FortuneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SwimCoachHome implements Coach {

    @Autowired
    @Qualifier("randomFileFortuneService")
    private FortuneService fortuneService;
    @Value("${email}")
    private String email;
    @Value("${team}")
    private String team;

    @Override
    public String getDailyWorkout() {
        return String.format("Swim for about 30 minutes. email=%s,team=%s", email, team);
    }

    @Override
    public String getDailyFortune() {
        return fortuneService.getFortune();
    }

}

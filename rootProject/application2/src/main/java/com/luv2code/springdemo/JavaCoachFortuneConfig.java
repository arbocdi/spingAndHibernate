package com.luv2code.springdemo;

import com.luv2code.springdemo.coaches.Coach;
import com.luv2code.springdemo.coaches.JavaCoach;
import com.luv2code.springdemo.services.FortuneService;
import com.luv2code.springdemo.services.JavaFortuneService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JavaCoachFortuneConfig {

    @Bean
    public FortuneService javaFortuneService() {
        return new JavaFortuneService();
    }

    @Bean
    public Coach javaCoach() {
        return new JavaCoach(javaFortuneService());
    }

    public static void main(String[] args) {
        try (AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(JavaCoachFortuneConfig.class)) {
            Coach coach = context.getBean("javaCoach", Coach.class);
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getDailyFortune());
        }

    }

}

package com.luv2code.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloSpringApp {

    public static void main(String[] args) {
        //load spring config file and close bean container
        try (ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            //retrieve a bean
            Coach coach = applicationContext.getBean("myCoach", Coach.class);
            //use bean
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getDailyFortune());
            
        }
    }
}

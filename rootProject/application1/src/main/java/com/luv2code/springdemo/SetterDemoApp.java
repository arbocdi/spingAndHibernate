
package com.luv2code.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;


public class SetterDemoApp {
    public static void main(String[] args) {
         //load spring config file and close bean container
        try (ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            //retrieve a bean
            CricketCoach coach = applicationContext.getBean("myCricketCoach", CricketCoach.class);
            //use bean
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getDailyFortune());
            //use getters
            System.out.println(coach.getEmailAddress());
            System.out.println(coach.getTeam());
            
        }
    }
}

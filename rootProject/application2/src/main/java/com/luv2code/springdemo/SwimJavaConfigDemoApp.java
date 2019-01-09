
package com.luv2code.springdemo;

import com.luv2code.springdemo.coaches.Coach;
import com.luv2code.springdemo.coaches.SwimCoach;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class SwimJavaConfigDemoApp {
    public static void main(String[] args) {
        //create container
        try (AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SportConfig.class)) {
            //get bean
            SwimCoach coach = context.getBean("swimCoach", SwimCoach.class);
            //use bean
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getDailyFortune());
            //use getter-methods on injected values from properties file
            System.out.println("Email:"+coach.getEmail());
            System.out.println("Team:"+coach.getTeam());
        }
    }
}


package com.luv2code.springdemo;

import com.luv2code.springdemo.coaches.Coach;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class JavaConfigDemoApp {
    public static void main(String[] args) {
        //create container
        try (AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SportConfig.class)) {
            //get bean
            Coach coach = context.getBean("swimCoachHome", Coach.class);
            //use bean
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getDailyFortune());
        }
    }
}

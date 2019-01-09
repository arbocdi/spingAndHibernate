
package com.luv2code.springdemo;

import com.luv2code.springdemo.coaches.Coach;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class AnnotationDemoApp {
    public static void main(String[] args) {
        //create container
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            //get bean
            Coach coach = context.getBean("swimCoach", Coach.class);
            //use bean
            System.out.println(coach.getDailyWorkout());
            System.out.println(coach.getDailyFortune());
        }
    }
}

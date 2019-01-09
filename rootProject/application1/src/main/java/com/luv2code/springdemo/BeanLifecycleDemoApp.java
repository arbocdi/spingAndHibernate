
package com.luv2code.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;


public class BeanLifecycleDemoApp {
    public static void main(String[] args) {
        //load spring config file and close bean container
        try (ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("beanLifeCycle_applicationContext.xml")) {
            //retrieve a bean
            Coach theCoach = applicationContext.getBean("bodyCoach", Coach.class);
           //use the bean
            System.out.println(theCoach.getDailyWorkout());

        }
    }
}

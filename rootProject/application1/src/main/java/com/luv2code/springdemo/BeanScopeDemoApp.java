package com.luv2code.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class BeanScopeDemoApp {

    public static void main(String[] args) {
        //load spring config file and close bean container
        try (ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("beanScope_applicationContext.xml")) {
            //retrieve a bean
            Coach theCoach = applicationContext.getBean("bodyCoach", Coach.class);
            Coach alphaCoach = applicationContext.getBean("bodyCoach", Coach.class);
            //check if the beans are the same
            boolean result = theCoach == alphaCoach;
            System.out.println("Pointing to the same object "+result);
            System.out.println("Memory location for theCoach "+theCoach);
            System.out.println("Memory location for the alphaCoach "+alphaCoach);

        }
    }
}

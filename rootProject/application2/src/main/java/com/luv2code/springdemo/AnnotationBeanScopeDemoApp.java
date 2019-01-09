
package com.luv2code.springdemo;

import com.luv2code.springdemo.coaches.Coach;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class AnnotationBeanScopeDemoApp {
    public static void main(String[] args) {
        //create AppContext
        try(ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")){
            //retrieve the bean from context
            Coach theCoach = context.getBean("tennisCoach", Coach.class);
            Coach alphaCoach = context.getBean("tennisCoach", Coach.class);
            //check if the beans are the same
            boolean result = theCoach==alphaCoach;
            //output results
            System.out.println("Beans are the same "+result);
            System.out.println(theCoach);
            System.out.println(alphaCoach);
        }
    }
}

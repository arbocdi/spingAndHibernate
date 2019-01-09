package com.luv2code.springdemo;

import com.luv2code.springdemo.coaches.Coach;
import com.luv2code.springdemo.coaches.SwimCoach;
import com.luv2code.springdemo.services.FortuneService;
import com.luv2code.springdemo.services.SadFortuneService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
//@ComponentScan
@PropertySource({"classpath:sport.properties", "classpath:fortune.properties"})
public class SportConfig {
    
    //define bean for SadFortuneService
    @Bean//bean id = methodName
    public FortuneService sadFortuneService(){
        return new SadFortuneService();
    }
    
    //define bean for SwimCoach and inject dependencie
    @Bean
    public Coach swimCoach(){
        return new SwimCoach(sadFortuneService());
    }

//    @Bean
//    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
//        return new PropertySourcesPlaceholderConfigurer();
//    }
}

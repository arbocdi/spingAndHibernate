package com.luv2code.springdemo.rest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class RestInterceptor {

//    @Around("@within(org.springframework.web.bind.annotation.RestController) && @annotation(org.springframework.web.bind.annotation.RequestMapping) ")
//    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
//        System.out.println(joinPoint.toLongString());
//        System.out.println(((MethodSignature)joinPoint.getSignature()));
//        return joinPoint.proceed(joinPoint.getArgs());
//    }
}

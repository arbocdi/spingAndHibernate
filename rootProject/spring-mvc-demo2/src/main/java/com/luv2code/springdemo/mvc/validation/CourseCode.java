package com.luv2code.springdemo.mvc.validation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

/**
 * Custom validation annotation
 */
//constraint annotation с указанием валидатора
@Constraint(validatedBy = CourseCodeConstraintValidator.class)
@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface CourseCode {

    String value() default "LUV";

    String message() default "must start with LUV";

    //define default groups
    Class<?>[] groups() default {};

    //define default payload: provides custom details about validation failure
    //severety level,error code etc
    public Class<? extends Payload>[] payload() default {};
}

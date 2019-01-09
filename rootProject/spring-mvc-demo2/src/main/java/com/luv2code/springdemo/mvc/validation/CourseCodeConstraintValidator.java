package com.luv2code.springdemo.mvc.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
Проверяет, что значение начинается с префикса,указанного в аннотации.
@author arbocdi
 */
public class CourseCodeConstraintValidator implements ConstraintValidator<CourseCode, String> {

    private CourseCode courseCode;

    @Override
    public void initialize(CourseCode a) {
        courseCode = a;
    }

    @Override
    public boolean isValid(String t, ConstraintValidatorContext cvc) {
        boolean result;
        if (t != null) {
            result = t.startsWith(courseCode.value());
        } else {
            result = true;
        }
        return result;
    }

}

package com.luv2code.springdemo.mvc;

import com.luv2code.springdemo.mvc.validation.CourseCode;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import lombok.Data;

/**
Class with validation
@author arbocdi
 */
@Data
public class Customer {

    private String firstName;
    @NotNull(message = "is required")
    @Size(min = 1, message = "is required")
    private String lastName;
    @NotNull(message = "is required")
    @Min(value = 0, message = "must be >=0")
    @Max(value = 10, message = "must be <=10")
    private Integer freePasses;
    @Pattern(regexp = "^[a-zA-Z0-9]{5}$",message = "Only 5 chars/digits")
    private String postalCode;
    /**
    Custom-validated field
    */
    @CourseCode
    private String courseCode;

}

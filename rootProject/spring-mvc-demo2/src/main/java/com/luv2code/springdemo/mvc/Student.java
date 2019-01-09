package com.luv2code.springdemo.mvc;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Data
public class Student {

    private String firstName, lastName, country, favoriteLanguage;
    @Setter(AccessLevel.NONE)
    private final Map<String, String> countryOptions;
    @Setter(AccessLevel.NONE)
    private final Map<String, String> favoriteLanguageOptions;
    private List<String> operatingSystems;

    public Student() {
        //populate country options
        countryOptions = new LinkedHashMap();
        //<value,label>
        countryOptions.put("BR", "Brasil");
        countryOptions.put("FR", "France");
        countryOptions.put("DE", "Germany");
        countryOptions.put("IN", "India");
        //populate favoriteLanguageOptions
        // parameter order: value, display label
        favoriteLanguageOptions = new LinkedHashMap();
        favoriteLanguageOptions.put("Java", "Java");
        favoriteLanguageOptions.put("Python", "Python");
    }
}

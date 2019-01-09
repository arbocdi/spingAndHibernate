package com.luv2code.springdemo.mvc;

import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/student")
public class StudentController {
    
    //injecting values from properties file
    @Value("#{countryOptions}")
    private Map<String, String> countryOptions;

    @RequestMapping("/showForm")
    public String showForm(Model model) {
        //for the form show we need to create Student object and put it in the model
        model.addAttribute("student", new Student());
        model.addAttribute("countryOptions", countryOptions);
        return "student-form";
    }

    @RequestMapping("/processForm")
    public String processForm(@ModelAttribute("student") Student student, Model model) {
        //спринг автоматом положит экземпляр Student с именем student в модель
        System.out.println(student);
        return "student-confirmation";
    }

}

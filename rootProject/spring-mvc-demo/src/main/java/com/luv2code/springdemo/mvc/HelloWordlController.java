package com.luv2code.springdemo.mvc;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloWordlController {

    //show initial form
    @RequestMapping("/showForm")
    public String showForm() {
        return "helloworld-form";
    }

    //process the form
    @RequestMapping("/processForm")
    public String processForm() {
        return "helloworld";
    }

    //reading form data and adding it to the model
    @RequestMapping("/processFormTwo")
    public String letsShoutDude(HttpServletRequest request, Model model) {
        //read request parameter
        String name = request.getParameter("studentName");
        //convert to uppercase
        String nameUppercase = name.toUpperCase();
        //create message
        String message = "Yo " + nameUppercase;
        //add message to the model
        model.addAttribute("message", message);
        return "helloworld";
    }

}

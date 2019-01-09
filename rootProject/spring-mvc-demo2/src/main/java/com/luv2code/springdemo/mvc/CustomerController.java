package com.luv2code.springdemo.mvc;

import javax.validation.Valid;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "/customer")
/**
Controller с валидацией.
 */
public class CustomerController {
    
    @RequestMapping("/showForm")
    public String showForm(Model model) {
        model.addAttribute("customer", new Customer());
        return "customer-form";
    }

    /**
    @param customer
    @param bindingResult хранит информацию о валидации
    @return view name
     */
    @RequestMapping("/processForm")
    public String processForm(
            @Valid @ModelAttribute("customer") Customer customer, BindingResult bindingResult) {
        System.out.println("BindingResult:"+bindingResult);
        if (bindingResult.hasErrors()) {
            return "customer-form";
        } else {
            return "customer-confirmation";
        }
    }

    /**
    Метод,аннотированный @InitBinder, осуществляет пре-процессинг 
    всех запросов, идущих в этот контроллер. Метод выполняется до валидации.
    @param binder 
     */
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        //spring-class обрезает пробелы в начале и в конце строки
        //true - если строка содержит только пробелы, добавить null вместо этой строки
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        //зарегистрируем пре-процессор для всех строковых данных
        binder.registerCustomEditor(String.class, stringTrimmerEditor);
    }
}

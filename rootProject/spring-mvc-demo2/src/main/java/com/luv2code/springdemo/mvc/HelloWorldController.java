package com.luv2code.springdemo.mvc;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
/**
Класс показывает и обрабатывает форму
 */
@RequestMapping(path = "/hello")
public class HelloWorldController {

    /**
    Метод, возвращающий форму. Http метод не указан, так что этот метод контроллера будет
    вызываться для всех http-методов.
    @return 
     */
    @RequestMapping("/showForm")
    public String showForm() {
        return "helloworld-form";
    }

    /**
    Метод обрабатывающий форму
    @return 
     */
    @RequestMapping("/processForm")
    public String processForm() {
        return "helloworld";
    }

    /**
    Метод обработки формы, переводит имя студента в верхний регистр.
    Добавляет ланные в модель.
     */
    @RequestMapping("/processFormV2")
    public String letsShoutDude(HttpServletRequest request, Model model) {
        //получаем параметр запроса studentName
        String studentName = request.getParameter("studentName");
        //формируем сообщение
        String message = "Yo! " + studentName.toUpperCase();
        //добавляем  данные в модель
        model.addAttribute("message", message);
        return "helloworld";
    }
    
     /**
    Метод обработки формы, переводит имя студента в верхний регистр.
    Получает имя студента через аннотацию.
    Добавляет ланные в модель.
     */
    @RequestMapping("/processFormV3")
    public String letsShoutDude(@RequestParam("studentName") String studentName, Model model) {
        //формируем сообщение
        String message = "Yo! " + studentName.toUpperCase();
        //добавляем  данные в модель
        model.addAttribute("message", message);
        return "helloworld";
    }

}

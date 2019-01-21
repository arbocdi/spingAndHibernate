package com.luv2code.springboot.demo.mycoolapp.rest;

import java.time.LocalDateTime;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FunRestController {

    @GetMapping("/")
    public String sayHallo() {
        return "Hello World! The server time is: " + LocalDateTime.now();
    }

}

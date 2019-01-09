package com.luv2code.springdemo.rest;

import com.luv2code.springdemo.entity.Student;
import java.util.LinkedList;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StudentRestController {

    @RequestMapping(path = "/students", method = RequestMethod.GET)
    public List<Student> getStudents() {
        List<Student> studentList = new LinkedList();
        studentList.add(new Student("Arboc", "Di"));
        studentList.add(new Student("Maya", "Lightbringer"));
        studentList.add(new Student("Gaal", "Anakreon"));
        return studentList;
    }
}

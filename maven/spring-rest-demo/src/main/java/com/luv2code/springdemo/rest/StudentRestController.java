package com.luv2code.springdemo.rest;

import com.luv2code.springdemo.entity.Student;
import java.util.LinkedList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StudentRestController {

    private List<Student> studentList;

    @PostConstruct
    public void loadData() {
        studentList = new LinkedList();
        studentList.add(new Student("Arboc", "Di"));
        studentList.add(new Student("Maya", "Lightbringer"));
        studentList.add(new Student("Gaal", "Anakreon"));

    }

    //endpoint for student list
    @RequestMapping(path = "/students", method = RequestMethod.GET)
    public List<Student> getStudents() {
        return studentList;
    }

    //endpoint for single student
    @RequestMapping(path = "/students/{studentId}", method = RequestMethod.GET)
    public Student getStudent(@PathVariable(name = "studentId") int studentId) {
        if (studentId < 0 || studentId >= studentList.size()) {
            throw new StudentNotFoundException(String.format("Student id=%s not found!", studentId));
        }
        return studentList.get(studentId);
    }
    //moved to @ControllerAdvice
//    //exception handler
//    @ExceptionHandler(StudentNotFoundException.class)
//    public ResponseEntity<StudentErrorResponse> handleException(StudentNotFoundException ex){
//        StudentErrorResponse error = new StudentErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage(), System.currentTimeMillis());
//        return new ResponseEntity(error, HttpStatus.NOT_FOUND);
//    }
//    //add generic exception handler
//    @ExceptionHandler
//    public ResponseEntity<StudentErrorResponse>handleException(Exception ex){
//        StudentErrorResponse error = new StudentErrorResponse(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), System.currentTimeMillis());
//        return new ResponseEntity(error, HttpStatus.BAD_REQUEST);
//    }
}

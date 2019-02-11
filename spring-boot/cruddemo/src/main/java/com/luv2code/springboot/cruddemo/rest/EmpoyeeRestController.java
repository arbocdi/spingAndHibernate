package com.luv2code.springboot.cruddemo.rest;

import com.luv2code.springboot.cruddemo.entity.Employee;
import com.luv2code.springboot.cruddemo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class EmpoyeeRestController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    @GetMapping("/employees/{id}")
    public Employee getById(@PathVariable("id") int id) {
        Employee emp = employeeService.findById(id);
        if (emp == null) {
            throw new RuntimeException(String.format("Employee with id=%s not found", id));
        } else {
            return emp;
        }
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee emp) {
        emp.setId(0);
        return employeeService.save(emp);
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee emp) {
        getById(emp.getId());
        return employeeService.save(emp);
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable("id") int id) {
        getById(id);
        employeeService.deleteById(id);
        return "Deleted Employee with id:=" + id;
    }


}

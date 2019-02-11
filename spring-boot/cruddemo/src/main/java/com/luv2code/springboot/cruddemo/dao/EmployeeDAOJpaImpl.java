package com.luv2code.springboot.cruddemo.dao;

import com.luv2code.springboot.cruddemo.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@Qualifier("jpa")
public class EmployeeDAOJpaImpl implements EmployeeDAO {

    @Autowired
    private EntityManager em;

    @Override
    public List<Employee> findAll() {
        return em.createQuery("SELECT e FROM Employee e").getResultList();
    }

    @Override
    public Employee findById(int id) {
        return em.find(Employee.class, id);
    }

    @Override
    public Employee save(Employee emp) {

        em.clear();
        return em.merge(emp);
    }

    @Override
    public void deleteById(int id) {
        em.createQuery("DELETE FROM Employee e WHERE e.id = :id").setParameter("id", id).executeUpdate();
    }
}

package com.luv2code.springboot.cruddemo.dao;

import com.luv2code.springboot.cruddemo.entity.Employee;
import org.hibernate.Session;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Primary
public class EmployeeDAOHibernateImpl implements EmployeeDAO{

    @PersistenceContext
    private EntityManager em;
    @Override
    public List<Employee> findAll() {
        Session session = em.unwrap(Session.class);
        return session.createQuery("SELECT e FROM Employee e").getResultList();
    }

    @Override
    public Employee findById(int id) {
        Session session = em.unwrap(Session.class);
        return session.get(Employee.class,id);
    }

    @Override
    public Employee save(Employee emp) {
        Session session = em.unwrap(Session.class);
        //очистим сессию от возможных старых объектов Employee
        session.clear();
        session.saveOrUpdate(emp);
        return emp;
    }

    @Override
    public void deleteById(int id) {
        Session session = em.unwrap(Session.class);
        session.createQuery("DELETE FROM Employee WHERE id = :id").setParameter("id",id).executeUpdate();
    }
}

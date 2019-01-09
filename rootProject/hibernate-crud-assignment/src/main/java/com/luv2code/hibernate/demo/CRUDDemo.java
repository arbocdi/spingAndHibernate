package com.luv2code.hibernate.demo;

import com.luv2code.hibernate.demo.entity.Employee;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class CRUDDemo {

    public static void main(String[] args) {
        //creating session factory
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Employee.class)
                .buildSessionFactory()) {
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    session.createNativeQuery("truncate table employee RESTART IDENTITY").executeUpdate();
                    //commit transaction
                    tx.commit();
                } catch (Exception ex) {
                    //rollback transaction on exception
                    if (tx != null) {
                        tx.rollback();
                    }
                    throw ex;
                }
            }
            //creating session
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();

                    //create employees
                    Employee arboc = new Employee("Arboc", "Digambara", "ACPR");
                    arboc.setDateOfBirth(new Date(System.currentTimeMillis()));
                    Employee dhurva = new Employee("Dhurva", null, "ACPR");
                    Employee gaal = new Employee("Gaal", "Anakreon", "KRPI");

                    session.save(arboc);
                    session.save(dhurva);
                    session.save(gaal);
                    System.out.println("#######SAVING COMPLETED#########");
                    //commit transaction
                    tx.commit();
                } catch (Exception ex) {
                    //rollback transaction on exception
                    if (tx != null) {
                        tx.rollback();
                    }
                    throw ex;
                }
            }
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //getting employees
                    Employee arboc = session.get(Employee.class, 1);
                    Employee dhurva = session.get(Employee.class, 2);
                    Employee gaal = session.get(Employee.class, 3);
                    System.out.println("#######saved employees###########");
                    System.out.println(arboc);
                    System.out.println(dhurva);
                    System.out.println(gaal);

                    //commit transaction
                    tx.commit();
                } catch (Exception ex) {
                    //rollback transaction on exception
                    if (tx != null) {
                        tx.rollback();
                    }
                    throw ex;
                }
            }
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //find employees for KRPI
                    List<Employee> employeeList = session.createQuery("FROM Employee e WHERE e.company = 'KRPI'").getResultList();
                    System.out.println("#######KRPI members##########");
                    displayEntities(employeeList);
                    //commit transaction
                    tx.commit();
                } catch (Exception ex) {
                    //rollback transaction on exception
                    if (tx != null) {
                        tx.rollback();
                    }
                    throw ex;
                }
            }
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //delete objects
                    Employee emp1 = session.get(Employee.class, 2);
                    if (emp1 != null) {
                        session.delete(emp1);
                    }
                    //commit transaction
                    tx.commit();
                } catch (Exception ex) {
                    //rollback transaction on exception
                    if (tx != null) {
                        tx.rollback();
                    }
                    throw ex;
                }
            }
        }
    }

    public static void displayEntities(Collection<?> coll) {
        for (Object elem : coll) {
            System.out.println(elem);
        }
    }
}

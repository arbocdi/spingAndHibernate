package com.luv2code.hibernate.demo;

import com.luv2code.hibernate.demo.entity.Course;
import com.luv2code.utils.CommonUtils;
import com.luv2code.hibernate.demo.entity.Instructor;
import com.luv2code.hibernate.demo.entity.InstructorDetail;
import java.math.BigDecimal;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

public class QuieryInstructorsLazyNewTransaction {

    public static void main(String[] args) {
        Instructor instructor = null;
        //creating session factory
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Instructor.class)
                .addAnnotatedClass(InstructorDetail.class)
                .addAnnotatedClass(Course.class)
                .buildSessionFactory()) {
            //creating session
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //do stuff
                    //lazy loading(by default) 
                    Query<Instructor> query = session.createQuery("SELECT i FROM Instructor i WHERE i.firstName = :firstName", Instructor.class);
                    query.setParameter("firstName", "Susan");
                    instructor = query.getSingleResult();
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
                    //do stuff
                    //c.instructor.id is a path expression
                    Query<Course> query = session.createQuery("SELECT c FROM Course c WHERE c.instructor.id = :id");
                    query.setParameter("id", instructor.getId());
                    instructor.setCourseList(query.getResultList());
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
        //session and sessionFactory are closed at this point
        System.out.println(instructor);
    }

}

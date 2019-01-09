package com.luv2code.hibernate.demo;

import com.luv2code.hibernate.demo.entity.Course;
import com.luv2code.utils.CommonUtils;
import com.luv2code.hibernate.demo.entity.Instructor;
import com.luv2code.hibernate.demo.entity.InstructorDetail;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class QuieryInstructors {

    public static void main(String[] args) {
        List<Instructor> instructorList = null;
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
                    //lazy loading(by default) means we need to iterate over connected objects inside transaction
                    instructorList = session.createQuery("SELECT i FROM Instructor i").getResultList();
                    for (Instructor instructor : instructorList) {
                        for (Course course : instructor.getCourseList()) {

                        }
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
        CommonUtils.printCollection(instructorList);
    }
}

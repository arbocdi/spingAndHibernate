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

public class CreateCourses {

    public static void main(String[] args) {
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
                    //create and associate objects
                    {
                        //getting instructor
                        Instructor instructor = (Instructor) session.createQuery("FROM Instructor i WHERE i.firstName='Susan'").getSingleResult();
                        //creating courses
                        Course course1 = new Course("Air Guitar - The Ultimate Guide");
                        Course course2 = new Course("The Pinball Masterclass");
                        //associating objects
                        instructor.addCourse(course1).addCourse(course2);
                        //saving courses
                        //session.save(instructor)
                        //hibenate save method will save related objects only if 
                        //relation is annotated with hibernate specific @Cascade annotation
                        session.persist(instructor);
                        //persist method uses JPA cascading, provided in @OneToMany annotation
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
}

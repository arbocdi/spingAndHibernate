package com.luv2code.hibernate.demo;

import com.luv2code.hibernate.demo.entity.Course;
import com.luv2code.utils.CommonUtils;
import com.luv2code.hibernate.demo.entity.Instructor;
import com.luv2code.hibernate.demo.entity.InstructorDetail;
import com.luv2code.hibernate.demo.entity.Review;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class CreateCourseAndReviews {
    
    public static void main(String[] args) {
        //creating session factory
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Instructor.class)
                .addAnnotatedClass(InstructorDetail.class)
                .addAnnotatedClass(Course.class)
                .addAnnotatedClass(Review.class)
                .buildSessionFactory()) {
            //creating session
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //create and associate objects
                    {
                        //creating courses
                        Course course1 = new Course("Pacman - How To Score One Million Points");
                        //add reviews
                        course1.addReview(new Review("Great course...loved it!"))
                                .addReview(new Review("Cool course,job well done."))
                                .addReview(new Review("What a dumb course!"));
                        //save with cascading        
                        session.persist(course1);
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

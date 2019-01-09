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
import org.hibernate.query.Query;

public class QuieryInstructorsLazyFetchJoin {

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
                    //lazy loading(by default) - HQL\JPQL query with FetchJoin will load dependent courses
                    //DISTINCT in used because Instructor object will be returned as many as many corses it has
                    Query<Instructor> query = session.createQuery("SELECT DISTINCT i FROM Instructor i JOIN FETCH i.courseList ",Instructor.class);
                    instructorList = query.getResultList();
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
        CommonUtils.printCollection(instructorList);
    }
}

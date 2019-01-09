package come.luv2code.hibernate.demo;

import come.luv2code.hibernate.demo.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class ReadStudentDemo {

    public static void main(String[] args) {
        //creating session factory
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory()) {
            //creating session
            Student tempStudent = new Student("Daffy", "Duck", "daffy@gmail.com");
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                //saving student
                try {
                    tx = session.beginTransaction();
                    //do stuff
                    session.save(tempStudent);
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
                //retrieving student
                try {
                    tx = session.beginTransaction();
                    //do stuff
                    Student foundStudent = session.get(Student.class, tempStudent.getId());
                    
                    System.out.println(foundStudent);
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

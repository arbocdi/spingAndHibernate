package come.luv2code.hibernate.demo;

import come.luv2code.hibernate.demo.entity.Student;
import java.util.Collection;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

public class QueryStudentDemo {

    public static void main(String[] args) {
        //creating session factory
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory()) {
            //creating session
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //get students with lastName=Goe
                    Query query = session.createQuery("FROM Student s WHERE s.lastName = :lastName");
                    query.setParameter("lastName", "Doe");
                    List<Student> studentList = query.getResultList();
                    displayStudents(studentList);
                    //quey students: lastName = Doe or firstName = Daffy
                    query = session.createQuery("FROM Student s WHERE s.lastName = :lastName OR s.firstName = :firstName");
                    query.setParameter("lastName", "Doe");
                    query.setParameter("firstName", "Daffy");
                    studentList = query.getResultList();
                    displayStudents(studentList);
                    //query students: email ends on gmail.com
                    query = session.createQuery("FROM Student s WHERE s.email LIKE '%luv2code.com'");
                    studentList = query.getResultList();
                    displayStudents(studentList);
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

    public static void displayStudents(Collection<?> coll) {
        for (Object elem : coll) {
            System.out.println(elem);
        }
    }
}

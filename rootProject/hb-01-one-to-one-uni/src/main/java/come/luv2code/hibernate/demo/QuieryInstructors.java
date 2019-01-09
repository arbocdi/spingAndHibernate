package come.luv2code.hibernate.demo;

import com.luv2code.utils.CommonUtils;
import come.luv2code.hibernate.demo.entity.Instructor;
import come.luv2code.hibernate.demo.entity.InstructorDetail;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class QuieryInstructors {

    public static void main(String[] args) {
        //creating session factory
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Instructor.class)
                .addAnnotatedClass(InstructorDetail.class)
                .buildSessionFactory()) {
            //creating session
            try (Session session = factory.openSession()) {
                //start transaction
                Transaction tx = null;
                try {
                    tx = session.beginTransaction();
                    //do stuff
                    List<Instructor> instructorList = session.createQuery("FROM Instructor i").getResultList();
                    CommonUtils.printCollection(instructorList);
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

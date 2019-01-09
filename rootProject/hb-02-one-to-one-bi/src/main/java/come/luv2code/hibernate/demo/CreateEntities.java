package come.luv2code.hibernate.demo;

import com.luv2code.utils.CommonUtils;
import come.luv2code.hibernate.demo.entity.Instructor;
import come.luv2code.hibernate.demo.entity.InstructorDetail;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class CreateEntities {

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
                    //create and associate objects
                    {
                        Instructor instructor = new Instructor("Madu", "Patel", "patel@luv2code.com");
                        InstructorDetail instructorDetail = new InstructorDetail("http://www.youtube.com", "Guitar");
                        //assosiate objects: при сохранении связанных объектов нужно обязательно устанавливать связанный объект
                        //для сущности-владельца связи (сущности, содержащей внешний ключ)
                        instructorDetail.setInstructor(instructor);
                        instructor.setInstructorDetail(instructorDetail);
                        //save instructor, with cascading=ALL InstructorDetail is also saved
                        System.out.println("Saving instructorDetail### " + instructorDetail);
                        session.persist(instructorDetail);
                    }
                     {
                        Instructor instructor = new Instructor("Chad", "Darby", "darby@luv2code.com");
                        InstructorDetail instructorDetail = new InstructorDetail("http://www.youtube.com", "Luv2code !!!");
                        //assosiate objects
                         instructorDetail.setInstructor(instructor);
                         instructor.setInstructorDetail(instructorDetail);
                        //save instructor, with cascading=ALL InstructorDetail is also saved
                        System.out.println("Saving instructorDetail#### " + instructorDetail);
                        session.persist(instructorDetail);
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

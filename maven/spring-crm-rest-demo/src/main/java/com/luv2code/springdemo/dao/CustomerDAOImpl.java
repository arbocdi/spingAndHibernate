package com.luv2code.springdemo.dao;

import com.luv2code.springdemo.entity.Customer;
import java.util.List;
import javax.persistence.TypedQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    //@Transactional moved to service
    public List<Customer> getCustomers() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("SELECT c FROM Customer c ORDER BY c.lastName", Customer.class).getResultList();
    }

    @Override
    public void saveCustomer(Customer customer) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(customer);
    }

    @Override
    public Customer getCustomer(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.find(Customer.class, id);
    }

    @Override
    public void deleteCustomer(int id) {
        Session session = sessionFactory.getCurrentSession();
        session.remove(getCustomer(id));
    }

    @Override
    public List<Customer> findCustomers(String theSearchName) {
        if (theSearchName == null || theSearchName.isEmpty()) {
            return getCustomers();
        }
        Session session = sessionFactory.getCurrentSession();
        TypedQuery<Customer> query = session.
                createQuery("SELECT c FROM Customer c WHERE lower(c.lastName) LIKE :name OR lower(c.firstName) LIKE :name", Customer.class);
        query.setParameter("name", "%" + theSearchName.toLowerCase() + "%");
        return query.getResultList();
    }

}

package com.luv2code.springdemo.dao;

import com.luv2code.springdemo.entity.Customer;
import java.util.List;

public interface CustomerDAO {

    List<Customer> getCustomers();

    void saveCustomer(Customer customer);
    
    Customer getCustomer(int id);
    
    void deleteCustomer(int id);
    
    List<Customer> findCustomers(String theSearchName);
}

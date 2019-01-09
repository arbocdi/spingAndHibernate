package com.luv2code.springdemo.service;

import com.luv2code.springdemo.entity.Customer;
import java.util.List;

/**
 *
 * @author arbocdi
 */
public interface CustomerService {

    List<Customer> getCustomers();

    void saveCustomer(Customer customer);
    
    Customer getCustomer(int id);
    
    void deleteCustomer(int id);
    
    List<Customer> findCustomers(String theSearchName);
}

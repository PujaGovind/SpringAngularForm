package com.Project.demo.Service;

import com.Project.demo.DTO.CustomerDTO;
import com.Project.demo.DTO.CustomerSaveDTO;
import com.Project.demo.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomers();

    String updateCustomer(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}

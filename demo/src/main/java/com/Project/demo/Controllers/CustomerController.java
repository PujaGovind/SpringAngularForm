package com.Project.demo.Controllers;
import com.Project.demo.DTO.CustomerDTO;
import com.Project.demo.DTO.CustomerSaveDTO;
import com.Project.demo.DTO.CustomerUpdateDTO;
import com.Project.demo.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO){
        String id = customerService.addCustomer(customerSaveDTO);
        return id;
    }

    @GetMapping(path="/getAllCustomers")
    public List<CustomerDTO> getAllCustomers(){
        List<CustomerDTO> allCustomers = customerService.getAllCustomers();
        return allCustomers;
    }

    @PutMapping(path= "/updateCustomer")
    public  String updateCustomer(@RequestBody CustomerUpdateDTO customerUpdateDTO){
        String id  = customerService.updateCustomer(customerUpdateDTO);
        return id;
    }

    @DeleteMapping (path = "/delete/{id}")
    public String deleteCustomer(@PathVariable (value = "id") int id){
        boolean deleteCustomer = customerService.deleteCustomer(id);
        return "deleted";
    }
}

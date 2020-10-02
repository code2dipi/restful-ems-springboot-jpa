package com.dipi.springwithreact.springbackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dipi.springwithreact.springbackend.exception.ResourceNotFoundException;
import com.dipi.springwithreact.springbackend.model.Employee;
import com.dipi.springwithreact.springbackend.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")// typical endpoint url
public class EmployeeController {
	@Autowired // to inject this repository by spring container
	private EmployeeRepository employeeRepository;
	

	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
   
	@PostMapping("/employees")
	//this rest api returns employee object as json
	public Employee createEmployee(@RequestBody Employee employee) {
		   return employeeRepository.save(employee);
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable long id) {
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->
		new ResourceNotFoundException("Employee is not exist ...with Id:"+id)
				);
		return ResponseEntity.ok(employee);
	}

	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails ){
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->
		new ResourceNotFoundException("Employee is not exist ...with Id:"+id));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setFirstName(employeeDetails.getLastName());
		employee.setFirstName(employeeDetails.getEmailId());
		Employee updatedEmployee=employeeRepository.save(employee);
		
		return ResponseEntity.ok(updatedEmployee);
		 
	}
	@DeleteMapping("/employees{id}")
	public ResponseEntity<Map<String,Boolean>>deleteEmployee(@PathVariable Long id){
		Employee employee=employeeRepository.findById(id)
				.orElseThrow(()->
		new ResourceNotFoundException("Employee is not exist ...with Id:"+id));
		employeeRepository.delete(employee);
		Map<String,Boolean> response=new HashMap<>();
		response.put("Deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
}

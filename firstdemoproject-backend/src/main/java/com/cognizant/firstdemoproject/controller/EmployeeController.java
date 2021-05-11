package com.cognizant.firstdemoproject.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cognizant.firstdemoproject.bean.Employee;
import com.cognizant.firstdemoproject.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("cognizant/employees")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("")
	public List<Employee> getAllEmployee(){
		return employeeService.getAllEmployee();
	}
	
	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable int id){
		return employeeService.getEmployeeById(id);
	}
	
	@PostMapping("")
	public ResponseEntity<Void> addEmployee(@RequestBody Employee emp){
		Employee createdEmployee=employeeService.addEmployee(emp);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdEmployee.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee emp){
		emp.setId(id);
		employeeService.addEmployee(emp);
		
		return new ResponseEntity<Employee>(emp,HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable int id){
		employeeService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}

package com.cognizant.firstdemoproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.firstdemoproject.bean.Employee;
import com.cognizant.firstdemoproject.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;

	public List<Employee> getAllEmployee() {
		
		return employeeRepository.findAll();
	}

	public Employee addEmployee(Employee emp) {
		
		return employeeRepository.save(emp);
		
	}

	public Employee getEmployeeById(int id) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(id).get();
	}

	public void deleteById(int id) {
		// TODO Auto-generated method stub
		employeeRepository.deleteById(id);
		
	}

}

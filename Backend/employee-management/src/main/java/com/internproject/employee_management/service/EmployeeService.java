package com.internproject.employee_management.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.internproject.employee_management.model.Employee;
import com.internproject.employee_management.repo.EmployeeRepo;
@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepo employeeRepo;
	
	public EmployeeService(EmployeeRepo employeeRepo) {
		super();
		this.employeeRepo = employeeRepo;
	}
	//create function
	public Employee addEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}
	
	//read functions
	public List<Employee> findAllEmployees(){
		return employeeRepo.findAll();
	}
	public Employee findEmployee(Integer eid) {
		Employee emp = employeeRepo.findEmployeeByEid(eid);
		 if (emp != null) {
			 return emp;
		 }
		throw new RuntimeException("Employee with ID " + eid + " not found");
	}
	public Employee findEmployeeByName(String name) {
		return employeeRepo.findEmployeeByFirstname(name);
	}
	//update function
	@Transactional
	public Employee updateEmployee(Employee employee) {
	    Employee existingEmployeeOpt = employeeRepo.findEmployeeByEid(employee.getEid());
	
	    if (existingEmployeeOpt != null) {
	    	
	        Employee existingEmployee = existingEmployeeOpt;
			
	        existingEmployee .setFirstname(employee.getFirstname());
	        existingEmployee.setLastname(employee.getLastname());
	        existingEmployee.setEmail(employee.getEmail());
	        existingEmployee.setPhone(employee.getPhone());
	        existingEmployee.setPosition(employee.getPosition());
	        existingEmployee.setDob(employee.getDob());
	        existingEmployee.setDept(employee.getDept());
	        existingEmployee.setJoining(employee.getJoining());
	   
	        return employeeRepo.save(existingEmployee);
	    }
		throw new RuntimeException("Employee with ID " + employee.getEid() + " not found");
	}
	//delete function
	@Transactional
	public void deleteEmployee(Integer eid) {
		employeeRepo.deleteEmployeeByEid(eid);
	}
}

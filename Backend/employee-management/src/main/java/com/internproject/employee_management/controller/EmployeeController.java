package com.internproject.employee_management.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.internproject.employee_management.model.DashboardData;
import com.internproject.employee_management.model.Employee;
import com.internproject.employee_management.service.DashboardService;
import com.internproject.employee_management.service.EmployeeService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	private final EmployeeService employeeService;
	
	@Autowired
    private DashboardService dashboardService;

	public EmployeeController(EmployeeService employeeService) {
		super();
		this.employeeService = employeeService;
	}
	@GetMapping("/all")
	@ResponseBody
	public ResponseEntity<List<Employee>> getAllEmployees(){
		List<Employee> employees = employeeService.findAllEmployees();
		return new ResponseEntity<>(employees,HttpStatus.OK);	
	}
	@GetMapping("/find/{id}")
	@ResponseBody
	public ResponseEntity<Employee> findEmployee(@PathVariable("id")Integer id){
		Employee emp = employeeService.findEmployee(id);
		return new ResponseEntity<>(emp,HttpStatus.OK);
	}
	
	@GetMapping("/find/{name}")
	@ResponseBody
	public ResponseEntity<Employee> findEmployeeByFirstname(@PathVariable("name")String name){
		Employee emp = employeeService.findEmployeeByName(name);
		return new ResponseEntity<>(emp,HttpStatus.OK);
	}
	//
	//
	@PostMapping("/admin/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		Employee emp = employeeService.addEmployee(employee);
		return new ResponseEntity<>(emp,HttpStatus.CREATED);
	}
	//
	//
	@PutMapping("/update")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee){
		Employee emp = employeeService.updateEmployee(employee);
		return new ResponseEntity<>(emp,HttpStatus.OK);
	}
	//
	//
	@DeleteMapping("admin/delete/{id}")
	@Transactional
	public ResponseEntity<?> deleteEmployee(@PathVariable("id")Integer id){
		employeeService.deleteEmployee(id);
		return new ResponseEntity<>(HttpStatus.OK);
		
	
	}
	@GetMapping("/overview")
    public DashboardData getOverview() {
        return dashboardService.getOverview();
    }
	
}

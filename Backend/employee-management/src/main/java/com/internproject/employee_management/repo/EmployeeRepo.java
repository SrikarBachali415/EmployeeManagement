package com.internproject.employee_management.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.internproject.employee_management.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,Integer>{
	@Query("SELECT COUNT(e) FROM Employee e WHERE e.position = :role")
    long countByRole(String role);
	
	@Query("SELECT COUNT(DISTINCT e.dept) FROM Employee e")
    long countDistinctDepartments();
	
	void deleteEmployeeByEid(Integer eid);

	Employee findEmployeeByEid(Integer eid);

	Employee findEmployeeByFirstname(String name);

}

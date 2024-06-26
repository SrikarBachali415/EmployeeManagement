package com.internproject.employee_management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.internproject.employee_management.model.DashboardData;
import com.internproject.employee_management.repo.EmployeeRepo;
@Service
public class DashboardService {

	    @Autowired
	    private EmployeeRepo employeeRepository;

	    public DashboardData getOverview() {
	        DashboardData overview = new DashboardData();
	        overview.setTotal_emp((int) employeeRepository.count());
	        overview.setEmp_no((int) employeeRepository.countByRole("employee"));
	        overview.setAdm_no((int) employeeRepository.countByRole("admin"));
	        overview.setDept_no((int) employeeRepository.countDistinctDepartments());
	        return overview;
	    }
}

package com.internproject.employee_management.model;

public class DashboardData {
	int emp_no;
	int adm_no;
	int total_emp;
	int dept_no;
	public DashboardData(int emp_no, int adm_no, int total_emp, int dept_no) {
		super();
		this.emp_no = emp_no;
		this.adm_no = adm_no;
		this.total_emp = total_emp;
		this.dept_no = dept_no;
	}
	public DashboardData() {
		// TODO Auto-generated constructor stub
	}
	public int getEmp_no() {
		return emp_no;
	}
	public void setEmp_no(int emp_no) {
		this.emp_no = emp_no;
	}
	public int getAdm_no() {
		return adm_no;
	}
	public void setAdm_no(int adm_no) {
		this.adm_no = adm_no;
	}
	public int getTotal_emp() {
		return total_emp;
	}
	public void setTotal_emp(int total_emp) {
		this.total_emp = total_emp;
	}
	public int getDept_no() {
		return dept_no;
	}
	public void setDept_no(int dept_no) {
		this.dept_no = dept_no;
	}
}

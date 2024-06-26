package com.internproject.employee_management.model;
import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Employee implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@SequenceGenerator(name = "seq", sequenceName = "empid")
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="seq")
	private int eid;
	private String firstname;
	private String lastname;
	private String email;
	private long phone;
	private String position;
	private String dob;
	private String dept;
	private String joining;
	public Employee(){}	 
	public Employee(String firstname, String lastname, String email, long phone, String position, String dob,
			String dept, String joining) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phone = phone;
		this.position = position;
		this.dob = dob;
		this.dept = dept;
		this.joining = joining;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getJoining() {
		return joining;
	}
	public void setJoining(String joining) {
		this.joining = joining;
	}
	@Override
	public String toString() {
		return "Employee [eid=" + eid + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", phone=" + phone + ", position=" + position + ", dob=" + dob + ", dept=" + dept + ", joining="
				+ joining + "]";
	}
	
	
	
	
}

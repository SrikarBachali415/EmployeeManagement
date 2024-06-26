package com.internproject.employee_management.model;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@SuppressWarnings("serial")
public class UserModel implements UserDetails{
	private int eid;
	private String username;
	private String password;
	private List<GrantedAuthority> authorities;
	@Enumerated(EnumType.STRING)
	private Role roles;
	
	public UserModel(UserInfo user) {
		super();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.roles = Role.valueOf(user.getRole().toUpperCase());
		

	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	 public Role getRoles() {
	        return roles;
	    }
	public void setRoles(Role roles) {
	        this.roles = roles;
	    }
	@Override
	public String toString() {
		return "User [ username=" + username + ", password=" + password + "]";
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(roles.name()));
	}
	
	
}

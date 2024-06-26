package com.internproject.employee_management.service;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.internproject.employee_management.model.UserModel;
import com.internproject.employee_management.model.Employee;
import com.internproject.employee_management.model.UserInfo;
import com.internproject.employee_management.repo.EmployeeRepo;
import com.internproject.employee_management.repo.UserRepo;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Service
public class UserServiceTemp implements UserDetailsService {
	@Autowired
    private UserRepo userRepository;
	@Autowired
    private EmployeeRepo employeeRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<UserInfo> optuser = userRepository.findByUsername(username);
		
        return optuser.map(UserModel::new).orElseThrow(()->new UsernameNotFoundException("Invalid Username"));
	}
}

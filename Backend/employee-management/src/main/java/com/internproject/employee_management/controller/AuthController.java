package com.internproject.employee_management.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.internproject.employee_management.model.Employee;
import com.internproject.employee_management.model.UserInfo;
import com.internproject.employee_management.service.AuthService;
import com.internproject.employee_management.service.AuthenticationRequest;
import com.internproject.employee_management.service.AuthenticationResponse;
import com.internproject.employee_management.service.UserServiceTemp;

@RestController
@RequestMapping("/api/auth/v2")
public class AuthController {
	@Autowired
    private AuthenticationManager authenticationManager;
	@Autowired
    private UserDetailsService userDetailsService;
	@Autowired
    private AuthService authService;
    
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
//        try {
//        	
//            Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(loginRequest.get("username"), loginRequest.get("password")));
//
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//
//            UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.get("username"));
//            return ResponseEntity.ok(userDetails);
//        } catch (Exception e) {
//            return ResponseEntity.status(401).body("Invalid username or password");
//        }
//    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> user) {
    	Integer eid = Integer.parseInt(user.get("eid"));
    	String username = user.get("username");
        String password = user.get("password");
        
        return ResponseEntity.ok(authService.registerUser(eid,username,password));
    }
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) throws Exception {
    	return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        
        return ResponseEntity.ok("Logged out successfully");
    }
    @PostMapping("/getemployee")
    public ResponseEntity<Employee> getEmployee(@RequestBody String token) throws Exception {
    	return ResponseEntity.ok(authService.getEmp(token));
    }
	
}


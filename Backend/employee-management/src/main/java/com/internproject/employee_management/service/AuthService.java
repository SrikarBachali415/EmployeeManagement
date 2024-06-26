package com.internproject.employee_management.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.internproject.employee_management.config.JwtService;
import com.internproject.employee_management.model.Employee;
import com.internproject.employee_management.model.Role;
import com.internproject.employee_management.model.UserInfo;
import com.internproject.employee_management.model.UserModel;
import com.internproject.employee_management.repo.EmployeeRepo;
import com.internproject.employee_management.repo.UserRepo;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;


@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class AuthService {
	@Autowired
    private UserRepo userRepository;
	@Autowired
    private EmployeeRepo employeeRepository;
	@Autowired
    private BCryptPasswordEncoder passwordEncoder;
	@Autowired
	private JwtService jwtService;
	@Autowired
	private AuthenticationManager authManager;
	 @Autowired
	private UserDetailsService userDetailsService;
	
	public AuthenticationResponse registerUser(Integer eid, String username, String password) {
        Employee employee = employeeRepository.findEmployeeByEid(eid);
        if (employee == null) {
            throw new RuntimeException("Employee not found");
        }

        
        String encodedPassword = passwordEncoder.encode(password);
        
        UserInfo user = new UserInfo();
        user.setUsername(username);
        user.setPassword(encodedPassword);
        user.setEmployee(employee);
        user.setRole("ROLE_"+employee.getPosition().toUpperCase());
        userRepository.save(user);
        UserModel addedUser= new UserModel(user);
        
        var jwtToken=jwtService.generateJwtToken(addedUser,Role.valueOf(user.getRole()));
        return new AuthenticationResponse(jwtToken);
        		
    }
	public AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception {
		
		try {
			authManager.authenticate(new UsernamePasswordAuthenticationToken(
				request.getUsername(), 
				request.getPassword()
					)
				);
			
		} catch (Exception e) {
			throw new Exception("Incorrect username or password", e);
		}
		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
		
		var jwtToken = jwtService.generateJwtToken(
				userDetails,
				Role.valueOf(userDetails
						.getAuthorities()
						.iterator()
						.next()
						.getAuthority())
				);
		
		return new AuthenticationResponse(jwtToken);
		
	}
	public Employee getEmp(String token) {
		String username=jwtService.extractUsername(token);
		Optional<UserInfo> user= userRepository.findByUsername(username);
		if (user.isPresent()) {
			return user.get().getEmployee();
		}
		return null;
		
	}

}

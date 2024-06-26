package com.internproject.employee_management.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.internproject.employee_management.model.UserInfo;
import com.internproject.employee_management.service.UserServiceTemp;

@RestController
@RequestMapping("/api/users")
public class UserController {
//
//    @Autowired
//    private UserServiceTemp userService;
//
//    @PostMapping("/register")
//    public UserInfo registerUser(@RequestBody Map<String, String> request) {
//        Integer eid = Integer.parseInt(request.get("eid"));
//    	String username = request.get("username");
//        String password = request.get("password");
//        return userService.registerUser(eid,username,password);
//    }
//
//    @PostMapping("/login")
//    public UserDetails loginUser(@RequestBody Map<String, String> request) {
//        String username = request.get("username");
//        //String password = request.get("password");
//        return userService.loadUserByUsername(username);
//    }
//    
}

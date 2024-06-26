package com.internproject.employee_management.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.internproject.employee_management.model.UserInfo;
import com.internproject.employee_management.model.UserModel;


public interface UserRepo extends JpaRepository<UserInfo,Integer>{
	Optional<UserInfo> findByUsername(String username);
}

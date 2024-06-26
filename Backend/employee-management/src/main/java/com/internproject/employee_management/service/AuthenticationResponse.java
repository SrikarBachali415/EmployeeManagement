package com.internproject.employee_management.service;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
	
	private String token;
	public AuthenticationResponse(String jwt) {
        this.token = jwt;
    }

    public String getJwt() {
        return token;
    }
}

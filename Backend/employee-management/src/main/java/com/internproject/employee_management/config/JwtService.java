package com.internproject.employee_management.config;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.internproject.employee_management.model.Role;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.io.Decoders;

@Service
public class JwtService {
	@Value("${jwt.secret}")
	String jwtSecret;
//	public String genSecret() {
//		byte[] secret = new byte[64];
//        new SecureRandom().nextBytes(secret);
//        String base64Secret = Base64.getEncoder().encodeToString(secret);
//        System.out.println("Generated Secret: " + base64Secret);
//        return base64Secret;
//    
//	}
	
	
	public String generateJwtToken(UserDetails userDetails,Role role) {
		Map<String, Object> claims = new HashMap<>();
	    claims.put("role", role.toString());
	    return Jwts.builder()
	
	    	.setClaims(claims)
	        .setSubject((userDetails.getUsername()))
	        .setIssuedAt(new Date(System.currentTimeMillis()))
	        .setExpiration(new Date(System.currentTimeMillis()+ 1000*60*60*24))
	        .signWith(key(),SignatureAlgorithm.HS256)
	        .compact();
	  }
	
	public String extractUsername(String token) {
		return Jwts
				.parserBuilder()
				.setSigningKey(key())
				.build()
	            .parseClaimsJws(token)
	            .getBody()
	            .getSubject();
	}
	public <T> T extractClaim(String token, Function <Claims, T> claimsResolver) {
		final Claims claims = extractClaims(token);
		return claimsResolver.apply(claims);
	}
	public Claims extractClaims(String token) {
		return Jwts
				.parserBuilder()
				.setSigningKey(key())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	private Key key() {
		
		return Keys.hmacShaKeyFor(this.jwtSecret.getBytes(StandardCharsets.UTF_8));
    }
	
	 public boolean isTokenValid(String token,UserDetails userDetails) {
		    final String username=extractUsername(token);
		    return (username.equals(userDetails.getUsername())&& !isTokenExpired(token));
	 }
	private boolean isTokenExpired(String token) {		
		return extractExpiration(token).before(new Date());
	}
	private Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

}

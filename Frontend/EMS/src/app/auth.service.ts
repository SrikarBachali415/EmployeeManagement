import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  public apiUrl = 'http://localhost:8080/api/auth/v2';  

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService ,private router:Router) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { username, password })
      .pipe(
        tap(response => {
          const token = response.jwt;
          localStorage.setItem('jwtToken', token);
        })
      );
  }
  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(["/home"]);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwtToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getJwtToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isAdmin(): boolean {
    const secret="WcQWah29mng/nexTXcAtsggdD4iW4ZtutsryCmkjWeJuR4s=";
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return false;
    }
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken && decodedToken.role === "ROLE_ADMIN";
  }
  
}


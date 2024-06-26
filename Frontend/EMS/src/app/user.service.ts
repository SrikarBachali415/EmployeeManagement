import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/auth/v2'; 

  constructor(private http: HttpClient) { }

  registerUser(eid: number, username: string, password: string): Observable<any> {
    const body = { eid, username, password };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
}

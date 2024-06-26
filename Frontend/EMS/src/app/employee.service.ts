import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private serverUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }
  //C
  public addEmployee(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.serverUrl}/employee/admin/add`,emp)
  }

  //R
  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.serverUrl}/employee/all`);
  }
  public getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.serverUrl}/employee/find/${id}`)
  }
  getOverview(): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/employee/overview`);
  }

  //U
  public updateEmployee(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.serverUrl}/employee/update`,emp)
  }

  //D
  public deleteEmployee(id:number):Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/employee/admin/delete/${id}`)
  }
}

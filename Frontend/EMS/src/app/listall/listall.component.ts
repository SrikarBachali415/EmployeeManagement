import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanComponentDeactivate } from '../guards/unsaved-changes.guard';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrl: './listall.component.css'
})
export class ListallComponent implements OnInit{
  constructor(private authService: AuthService ,private employeeService: EmployeeService) { }
  public employees: Employee[]=[];
  
  filteredEmployees: Employee[] = [];
  sortDirection: 'asc' | 'desc' = 'asc'; // Initial sort direction
  sortKey: keyof Employee = 'eid';
  ngOnInit(): void {
      
      this.getEmployees();
      
  }
  sortEmployees(key: keyof Employee) {
    this.sortKey = key;
    this.employees.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (valA < valB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valA > valB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortEmployees(this.sortKey);
  }
  
  logout() {
    this.authService.logout();
  }
  
  public getEmployees():void{
  
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) =>{
        this.employees = response;
        this.sortEmployees(this.sortKey);
      },
      (error) =>{
        console.error('Error fetching employees:', error);
        alert('Error fetching employees. Please try again later.');
      }
    )
  }
}

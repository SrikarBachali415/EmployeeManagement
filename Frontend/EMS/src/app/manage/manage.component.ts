import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent{
  constructor(private authService: AuthService ,private employeeService: EmployeeService) { }
  public employees: Employee[]=[];
  selectedEmployee: any = {};
  filteredEmployees: Employee[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  sortKey: keyof Employee = 'eid';
  ngOnInit(): void {
      
      this.loadEmployees();
      
  }

  
  logout() {
    this.authService.logout();
  }
  openEditModal(employee: any): void {
    this.selectedEmployee = { ...employee };
    this.openModal('editEmployeeModal');
  }

  openDeleteModal(employee: any): void {
    this.selectedEmployee = { ...employee };
    this.openModal('deleteEmployeeModal');
  }

  openModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  onEditSubmit(form: any): void {
    if (form.valid) {
      this.employeeService.updateEmployee(form.value).subscribe(() => {
        this.loadEmployees();
        this.closeModal('editEmployeeModal');
      });
    }
  }

  confirmDelete(): void {
    this.employeeService.deleteEmployee(this.selectedEmployee.eid).subscribe(() => {
      this.loadEmployees();
      this.closeModal('deleteEmployeeModal');
    });
  }

  public loadEmployees():void{
  
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) =>{
        this.employees = response;
        this.filteredEmployees = [...this.employees]; 
        this.sortEmployees(this.sortKey);
      },
      (error) =>{
        console.error('Error fetching employees:', error);
        alert('Error fetching employees. Please try again later.');
      }
    )
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
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {
  employee: any={};
  constructor(private authService:AuthService ,private empService:EmployeeService) {
  }
  
  logout() {
    this.authService.logout();
  }
  

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newEmployee: Employee = this.employee;
      this.empService.addEmployee(this.employee).subscribe(
        response => {
          alert('Employee added successfully.');
        },
        error => {
          console.error('Error adding:', error);
          alert('Error adding employee. Please try again.');
        }
      );
      console.log('Employee added successfully:', newEmployee);
    } else {
      alert('Form is invalid');
    }
}
}
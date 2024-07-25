import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormBuilder, FormGroup, NgForm, AbstractControl } from '@angular/forms';

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
  validateDob() {
    const dob = new Date(this.employee.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 18) {
      return { 'invalidDOB': true };
    }

    return null;
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
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
}
}
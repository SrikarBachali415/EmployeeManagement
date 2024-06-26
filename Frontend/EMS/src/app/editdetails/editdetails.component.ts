import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrl: './editdetails.component.css'
})
export class EditdetailsComponent {
  empService: any;
  constructor(private authService: AuthService ,private employeeService: EmployeeService,private http: HttpClient) { }
  selectedEmployee: any = {};

  
  ngOnInit():void{
    const token=localStorage.getItem('jwtToken');
    if(token){
      this.http.post<Employee>(`${this.authService.apiUrl}/getemployee`, token).subscribe(
        (employee: any) => {
        this.selectedEmployee = employee;
        },
        (error: any) => {
        console.error('Failed to fetch employee details', error);
        }
    );
    }
  }
 
  logout() {
    this.authService.logout();
  }
  

  onSubmit(form: NgForm): void {
    
    if (form.valid) {
      const newEmployee: Employee = this.selectedEmployee;
      this.employeeService.updateEmployee(this.selectedEmployee).subscribe(
        () => {
          alert('Employee edited successfully.');
        },
        (error: any) => {
          console.error('Error editing:', error);
          alert('Error editing employee. Please try again.');
        }
      );
      console.log('Employee added successfully:', newEmployee);
    } else {
      console.log('Form is invalid');
    }
  }
}

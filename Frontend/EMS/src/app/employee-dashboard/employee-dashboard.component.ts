import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {

  overview: any = {};
  constructor(private authService: AuthService ,private empService: EmployeeService) { }
  ngOnInit(): void {
    this.fetchOverview();
  }
  logout() {
    this.authService.logout();
  }
  fetchOverview(): void {
    this.empService.getOverview().subscribe({
      next: (data) => {
        this.overview = data;
      },
      error: (err) => {
        console.error('Error fetching overview data', err);
      }
    });
}
}

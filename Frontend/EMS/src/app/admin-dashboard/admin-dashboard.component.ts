import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
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


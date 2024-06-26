import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  constructor(private authService: AuthService) { }
  
  logout() {
    this.authService.logout();
  }
}

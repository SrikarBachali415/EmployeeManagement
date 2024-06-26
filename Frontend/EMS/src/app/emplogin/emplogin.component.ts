import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrl: './emplogin.component.css'
})
export class EmploginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {      
        console.log('Login successful');
        this.router.navigate(['/employee/empdashboard']);  
      },
      error: (error) => {
        alert("Wrong username or password");
        console.error('Login failed', error);
      }
    })
}
}

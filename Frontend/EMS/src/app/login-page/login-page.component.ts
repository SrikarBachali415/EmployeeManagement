import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  login(): void {
      this.authService.login(this.username, this.password).subscribe({
        next: () => {      
          if (this.authService.isAdmin()){
            console.log('Login successful');
            this.router.navigate(['/admin/dashboard']);}
          else{
            alert("Need admin role to access");
            this.authService.logout();
          }
        },
        error: (errorMessage) => {
          alert("Wrong username or password");
          console.log("Wrong username or password");
          console.error('Wrong username or password', this.errorMessage);
          
        }
      })
  }
}


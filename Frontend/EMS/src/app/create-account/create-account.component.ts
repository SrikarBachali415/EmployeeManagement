import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  eid: number|null=null;
  username: string = '';
  password: string= '';
  cpassword: string= '';
  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    if (!this.username || !this.eid || !this.password) {
      alert('Please fill in all fields');
      return;
    }
    if (this.cpassword !== this.password){
      alert('Passwords dont match');
      return;
    }
    this.userService.registerUser(this.eid, this.username, this.password).subscribe(
      response => {
        alert('User registered successfully. Proceed to login');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}

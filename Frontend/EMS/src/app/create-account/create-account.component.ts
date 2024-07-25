import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  eid: number | null = null;
  username: string = '';
  password: string = '';
  cpassword: string = '';
  passwordError: boolean = false;
  passwordsDoNotMatch: boolean = false;
  hasUppercase: boolean = false;
  hasLowercase: boolean = false;
  hasNumber: boolean = false;
  hasSpecialCharacter: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  validatePassword() {
    const password = this.password;
    this.passwordError = password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.checkPasswordsMatch();
  }

  checkPasswordsMatch() {
    this.passwordsDoNotMatch = this.password !== this.cpassword;
  }

  registerUser() {
    this.validatePassword();
    if (!this.username || !this.eid || !this.password) {
      alert('Please fill in all fields');
      return;
    }
    if (this.passwordError) {
      alert('Password does not meet the required criteria.');
      return;
    }
    if (this.passwordsDoNotMatch) {
      alert('Passwords do not match');
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

  onCreateAccountSubmit(form: any) {
    if (form.valid && !this.passwordError && !this.passwordsDoNotMatch) {
      this.registerUser();
    }
  }
}

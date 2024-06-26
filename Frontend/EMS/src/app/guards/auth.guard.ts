import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    
    if (!isAuthenticated && (state.url === '/home' || state.url === '/login' || state.url === '/emplogin')) {
      return true;
    }
    if (!isAuthenticated ) {
      this.router.navigate(['/home']);
      return false;
    }
    console.log(state.url);
    if (isAuthenticated && (state.url === '/login'||state.url === '/home'|| state.url === '/emplogin')){
      const confirmLogout = window.confirm('Are you sure you want to log out?');
      if (confirmLogout) {
        this.authService.logout();
        this.router.navigate(['/home']);
        return false;
      } else {
        return false;
      }
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const excludedUrls = [
      `${this.authService.apiUrl}/authenticate`,
      `${this.authService.apiUrl}/register`
    ];
    const isExcludedUrl = excludedUrls.some(url => request.url.includes(url));

    if (!isExcludedUrl) {
      const token = this.authService.getJwtToken();
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
    }}
    return next.handle(request);
  }
}

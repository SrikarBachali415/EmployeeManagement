import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListallComponent } from './listall/listall.component';
import { ManageComponent } from './manage/manage.component';
import { JwtModule, JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    EmploginComponent,
    AdminDashboardComponent,
    ListallComponent,
    ManageComponent,
    AddemployeeComponent,
    EmployeeDashboardComponent,
    EmplistComponent,
    EditdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

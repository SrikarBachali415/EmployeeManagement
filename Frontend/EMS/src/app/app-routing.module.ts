import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';

import { HomepageComponent } from './homepage/homepage.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';

import { ListallComponent } from './listall/listall.component';
import { ManageComponent } from './manage/manage.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent ,canActivate: [AuthGuard]},
  { path: 'create', component: CreateAccountComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'emplogin', component: EmploginComponent,canActivate: [AuthGuard] },
  { path: 'admin/dashboard', component: AdminDashboardComponent ,canActivate: [AuthGuard]},
  { path: 'admin/listall', component: ListallComponent,canActivate: [AuthGuard]   },
  { path: 'admin/manage', component: ManageComponent,canActivate: [AuthGuard] },
  { path: 'admin/addemployee', component: AddemployeeComponent,canActivate: [AuthGuard]   },
  { path: 'employee/empdashboard', component: EmployeeDashboardComponent,canActivate: [AuthGuard]   },
  { path: 'employee/emplist', component: EmplistComponent,canActivate: [AuthGuard]   },
  { path: 'employee/editemployee', component: EditdetailsComponent,canActivate: [AuthGuard]   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

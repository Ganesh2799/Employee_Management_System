import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { LeaveAttendanceComponent } from './leave-attendance/leave-attendance.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { UseraccountService } from './useracccount.service';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { LeaveComponent } from './leave/leave.component';
import { IncomeComponent } from './income/income.component';
import { SalaryFormComponent } from './salary-form/salary-form.component';



// const routes: Routes = [
//   {path : 'home',component:HomeComponent},
//   {path: 'create-employee', component: CreateEmployeeComponent},
//   {path: '', redirectTo: 'employees', pathMatch: 'full'},
//   {path: 'update-employee/:id', component: UpdateEmployeeComponent},
//   {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  
//   {path:'leave-attendance',component:LeaveAttendanceComponent},
//   {path: 'login', component:LoginComponent },
//  {path: 'register',component:RegisterComponent},
//  {path:'useraccount',component:useraccount},
//  { path: 'logout', component: LogoutComponent },
//  {path: 'employees', component: EmployeeListComponent},

 
  


// ];
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login page
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'create-employee', component: CreateEmployeeComponent ,canActivate: [AuthGuard]},
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  // { path: 'leave-attendance', component: LeaveAttendanceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'useraccount', component: UseraccountService},
  { path: 'logout', component: LogoutComponent ,canActivate: [AuthGuard]},
  { path: 'employees', component: EmployeeListComponent ,canActivate: [AuthGuard]},
  { path: 'employee-search', component: EmployeeSearchComponent,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/employee-search', pathMatch: 'full' },
  {path: 'leave',component:LeaveComponent},
  { path: 'employeeId' , component:LeaveComponent},
  // { path: '', redirectTo: '/employees', pathMatch: 'full' },
  // { path: 'employees', component: IncomeComponent },
  // { path: 'employees/new', component: SalaryFormComponent },
  // { path: 'employees/:id', component: SalaryFormComponent },
  { path: 'income', component: IncomeComponent,canActivate: [AuthGuard] },
  { path: 'employees/new', component: SalaryFormComponent },
  { path: 'employees/:id', component: SalaryFormComponent },
  { path: 'salary-form', component: SalaryFormComponent },

  
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }

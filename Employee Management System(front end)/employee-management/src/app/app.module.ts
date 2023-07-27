import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { LeaveAttendanceComponent } from './leave-attendance/leave-attendance.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
 import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication-service.service';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { SalaryFormComponent } from './salary-form/salary-form.component';
import { IncomeComponent } from './income/income.component';
  import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    LeaveAttendanceComponent,
     LoginComponent,
     LogoutComponent,
     NavbarComponent,
     FooterComponent,
     RegisterComponent,
     EmployeeSearchComponent,
     LeaveComponent,
     LeaveListComponent,
     SalaryFormComponent,
     IncomeComponent,
     
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
      ReactiveFormsModule
  ],
  providers: [AuthenticationService],//add UseraccountService
  bootstrap: [AppComponent]
})
export class AppModule { }
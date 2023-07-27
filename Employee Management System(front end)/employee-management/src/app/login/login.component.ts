// import { Component, NgModule, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms'; // Import FormsModule

// import { AuthenticationService } from '../authentication-service.service';
// import { useraccount, UseraccountService } from '../useracccount.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   employeeId = '';
//   password = '';
//   invalidLogin = false;
//   user: useraccount = new useraccount('', '', '');
//   type: number=0;

//   constructor(
//     private userService: UseraccountService,
//     private router: Router,
//     private loginservice: AuthenticationService
//   ) {}

//   ngOnInit() {}

//   public checkLogin() {
//     this.user = new useraccount(this.employeeId, this.password, 'admin');
//     console.log('ASD' + this.employeeId + ' ' + this.password);
//     this.userService.checkEmployee(this.employeeId, this.password).subscribe((data) => {
//       this.type = data as number;
//       console.log('first');

//       if (this.type == 1) {
//         console.log('SECOND' + this.employeeId);
//         if (this.employeeId == 'admin') {
//           this.router.navigate(['admin']);
//           this.userService.setLoggedIn(true);
//           return true;
//         } else if (this.employeeId == 'dept') {
//           this.router.navigate(['dept']);
//           this.userService.setLoggedIn(true);
//           return true;
//         } else if (this.employeeId == 'emp') {
//           console.log('third');
//           this.router.navigate(['emp']);
//           this.userService.setLoggedIn(true);
//           return true;
//         } else {
//           console.log('fourth');
//           this.employeeId = '';
//           this.password = '';
//           alert('ENTER THE CORRECT USERNAME AND PASSWORD :(');
//         }
//         console.log('fifth');
//       }
//       return false;
//     });
//   }
// }

// // @NgModule({
// //   // declarations: [LoginComponent],
// //   imports: [FormsModule], // Include FormsModule here
// //   providers: [UseraccountService, AuthenticationService]
// // })
// // export class LoginModule {}
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UseraccountService } from '../useracccount.service';
import { AuthenticationService } from '../authentication-service.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User(0, '', '', '', '', '', '');


  constructor(
    private es: UseraccountService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authservice:AuthenticationService
  ) {}

  newregistration() {
    this.router.navigate(['/register']);
  }

 getLogin(): void {
  this.es.getlogin(this.user).subscribe(
    (data: any) => {
      if (data) {
        this.authservice.login();
        alert('Login Successful');
        console.log('login response', data);

   
        this.router.navigateByUrl('/home');
      } else {
        alert('Sorry, invalid username or password');
      }
    },
    (error: any) => {
      console.error('Error occurred during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  );
}

  
}
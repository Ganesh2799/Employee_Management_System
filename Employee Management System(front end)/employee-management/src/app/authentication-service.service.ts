// import { Injectable } from '@angular/core';
// import { useraccount,UseraccountService } from './useracccount.service';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Employee } from './employee';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   public employee:useraccount ;
//   // public employe:useraccount;
//   constructor(private useraccountservice: UseraccountService,private router: Router,
//     private authService: AuthenticationService) {
//       this.employee = new useraccount("","","");
//      }

//   authenticate() {
//     // this.employe.employeeId="test";
//     // this.employe.type="test";
//     // this.employe.password="test";
//     // console.log("DSA"+username+" "+password);
//     console.log("from authentication service"+this.employee.employeeId);
//     this.useraccountservice.getEmployee(this.employee.employeeId)
//     .subscribe(data => this.employee = data);
//     //console.log("from authentication service"+this.employes.employeeId);
//    /* 
//     if (this.employes!=null) {
//       console.log("from if");

//       if(this.employes.employeeId=='admin'){
//         if(this.employes.password==password){
//           this.router.navigate(['admin']);
//           return true;
//         }
//       }else if(this.employes.employeeId=='department'){
//         if(this.employes.password==password){
//           this.router.navigate(['department']);
//           return true;
//         }
//       }else if(this.employes.password==password){
//           this.router.navigate(['employee']);
//           return true;
//       }
//     }else{
//       console.log("service");
//     } 
//    */
//     this.router.navigate(['login']);
//     return false;
//   }

// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthenticationService {
//   private loggedIn = false;

//   login() {
//     this.loggedIn = true;
//   }

//   logout() {
//     this.loggedIn = false;
//   }

//   isLoggedIn() {
//     return this.loggedIn;
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  getIsAuthenticated2: any;

  constructor() { }

  login() {
    
    this.isAuthenticated = true;
  }

  logout() {
   
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  
  

}


// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { UseraccountService } from './useracccount.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild {
//   constructor(private auth: UseraccountService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.auth.isLoggedIn) {
//       return true;
//     } else {
//       // Redirect to the login page or any other appropriate page
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }

//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true; // or implement your logic for child route authentication
//   }
// }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authentication: AuthenticationService, private router: Router) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authentication.getIsAuthenticated()) {
      return true;
    } else {
      // Redirect to login page if the user is not authenticated.
      return this.router.createUrlTree(['/login']);
    }
  }
}

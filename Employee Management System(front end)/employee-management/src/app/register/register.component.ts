// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface User {
//   username: string;
//   password: string;
// }

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private http: HttpClient) { }

//   register(): void {
//     const user: User = { username: this.username, password: this.password };
//     this.http.post<User>('http://localhost:9191/api/users/register', user)
//       .subscribe(response => {
//         console.log('Registration successful');
//       }, error => {
//         console.log(error.error.message);
//       });
//   }
// }
import { Component, OnInit } from '@angular/core';
// import { User } from '../../comman/user';
// import { UserservieService } from 'src/app/userservie.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UseraccountService } from '../useracccount.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User = new User(0, "", "", "", "", "", "");//

  constructor(private es : UseraccountService ,private router:Router){}

  ngOnInit(): void {
    // Implementation for ngOnInit
  }

  // SaveUsers() {
  //   this.es.saveUser(this.user).subscribe(
  //     () => {
  //       alert("Successfully registered!");
  //       this.router.navigateByUrl("/login");
  //     },
  //     () => {
  //       alert("Enter the user data.");
  //     }
  //   );
  // }
  SaveUsers() {
    if (this.user) {
      this.es.saveUser(this.user).subscribe(
        () => {
          alert("Successfully registered!");
          this.router.navigateByUrl("/login");
        },
        () => {
          alert("Failed to save user data.");
        }
      );
    } else {
      alert("Enter the user data.");
    }
  }
  
}
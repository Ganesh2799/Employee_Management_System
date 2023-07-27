import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {
  private userUrl = "http://localhost:9191/controll/list";
  private newuserurl = "http://localhost:9191/controll/saveuser";
  private loginurl = "http://localhost:9191/controll/login";

  constructor(private http: HttpClient) {}

  getlogin(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.loginurl, user);
  }

  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token'
      })
    };
    return this.http.put<User>(`${this.userUrl}/${user.eluser_id}`, user, httpOptions);
  }

  saveUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token'
      })
    };
    return this.http.post<User>(this.newuserurl, user, httpOptions);
  }
}

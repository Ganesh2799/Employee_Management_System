// // import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { leave1 } from './leave1';

// @Injectable({
//   providedIn: 'root'
// })
// export class LeaveService {
//   private apiUrl = 'http://localhost:9191/api/leaves'; // Replace with your API URL

//   constructor(private http: HttpClient) { }

//   // Function to create a new leave
//   createLeave(leaveData: any): Observable<any> {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
//     return this.http.post<any>(`${this.apiUrl}/abc`, leaveData, httpOptions)
//       .pipe(
//         catchError(error => {
//           console.error('Error creating leave:', error);
//           return throwError(error);
//         })
//       );
//   }

//   // Function to get all leaves by employee id
//   getLeavesByEmployeeId(employeeId: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${employeeId}`)
//       .pipe(
//         catchError(error => {
//           console.error('Error getting leaves:', error);
//           return throwError(error);
//         })
//       );
//   }
//   getleaveList(): Observable<leave1[]>{
//     return this.http.get<leave1[]>(`${this.apiUrl}`);
//   }
// }
// leave.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { leave1 } from './leave1';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:9191/api/leaves'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Function to create a new leave
  createLeave(leaveData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/abc`, leaveData, httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error creating leave:', error);
          return throwError(error);
        })
      );
  }

  // Function to get all leaves by employee id
  getLeavesByEmployeeId(employeeId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${employeeId}`)
      .pipe(
        catchError(error => {
          console.error('Error getting leaves:', error);
          return throwError(error);
        })
      );
  }

  // Function to get a list of all leaves
  getleaveList(): Observable<leave1[]> {
    return this.http.get<leave1[]>(`${this.apiUrl}`);
  }
}


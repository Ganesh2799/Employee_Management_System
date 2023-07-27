// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SalaryService {

//   private apiUrl = 'http://localhost:9191/incomeSalary';

//   constructor(private http: HttpClient) {}

//   createEmployee(employee: any) {
//     return this.http.post<any>(this.apiUrl, employee);
//   }

//   getEmployees() {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   getEmployeeById(employeeId: number) {
//     return this.http.get<any>(`${this.apiUrl}/${employeeId}`);
//   }

//   updateEmployee(employeeId: number, employee: any) {
//     return this.http.put<any>(`${this.apiUrl}/${employeeId}`, employee);
//   }

//   deleteEmployee(employeeId: number) {
//     return this.http.delete<void>(`${this.apiUrl}/${employeeId}`);
//   }

//   calculateSalary(employeeId: number) {
//     return this.http.get<number>(`${this.apiUrl}/${employeeId}/salary`);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private baseUrl = 'http://localhost:9191/incomeSalary';

  constructor(private http: HttpClient) { }

  calculateSalary(employeeId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${employeeId}/salary`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, employee);
  }

  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}`);
  }

  updateEmployee(employeeId: number, updatedEmployee: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${employeeId}`, updatedEmployee);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employeeId}`);
  }
}
// export interface IncomeSalary extends SalaryService  {
//   // TypeScript interface representing the structure of an employee's salary data.
//     id:number;
//     firstName:String;
//     lastName:String;
//     basicSalary:number;
//     attendance:number;
//     otherDeductions:number;
// }


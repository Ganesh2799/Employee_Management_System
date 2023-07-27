import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:9191/api/v1/employees";
  

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  createEmployeeWithDesignation(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/designation`, employee);
  }
  createEmployeeWithEmployeeID(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/employeeId`, employee);
  }
  createEmployeeSalary(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }
  updateEmployeeId(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}/updateId`, employee);
  }

  //change if not work 
  getEmployeeByEmployeeId(employeeID: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/employeeId/${employeeID}`);
  }

  //change if not work 
  updateEmployeeByEmployeeId(employeeID: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseURL}/employeeId/${employeeID}`, employee);
  }
  //change if not work
  getEmployeeByFirstNameAndLastName(firstName: string, lastName: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/search?firstName=${firstName}&lastName=${lastName}`);
  }


  
  

  //change if not work
  // searchEmployees(searchTerm: string): Observable<Employee[]> {
  //   return this.httpClient.post<Employee[]>(`${this.baseURL}/search`, { params: { name: searchTerm } });
  // }
  // searchEmployees(firstName: string, lastName: string): Observable<Employee[]> {
  //   // Modify the searchEmployees method to send a POST request
  //   return this.httpClient.post<Employee[]>(`${this.baseURL}/search`, { firstName: firstName, lastName: lastName });
  // }
  


  
  searchEmployees(firstName: string, lastName: string): Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(`${this.baseURL}/search`, { firstName: firstName, lastName: lastName });
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

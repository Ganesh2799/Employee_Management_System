// // employee-search.component.ts
// import { Component } from '@angular/core';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service';
// import { ActivatedRoute, Router } from '@angular/router';
// // import { Employee } from './employee.model';
// // import { EmployeeService } from './employee.service';

// @Component({
//   selector: 'app-employee-search',
//   templateUrl: './employee-search.component.html',
// })
// export class EmployeeSearchComponent {
//    searchCriteria: any = { firstName: '', lastName: '' }; // Initialize searchCriteria
//   // searchCriteria: any = {};
//   searchResults: Employee[] = [];

//   constructor(private employeeService: EmployeeService ) {}

//   onSearch(): void {
//     // this.employeeService.searchEmployees(this.searchCriteria).subscribe(
//     //   (employees: Employee[]) => {
//     //     this.searchResults = employees;
//     //   },
//     //   (error:any) => {
//     //     console.error('Error fetching employees:', error);
//     //   }
//     // );
//     this.employeeService
//       .searchEmployees(this.searchCriteria.firstName, this.searchCriteria.lastName)
//       .subscribe(
//         (employees: Employee[]) => {
//           this.searchResults = employees;
//         },
//         (error) => {
//           console.error('Error fetching employees:', error);
//         }
//       );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  // searchCriteria: { firstName: string, lastName: string } = { firstName: '', lastName: '' };
  // searchResults: Employee[] = [];

  // constructor(private employeeService: EmployeeService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // onSearch(): void {
  //   const firstName = this.searchCriteria.firstName.trim();
  //   const lastName = this.searchCriteria.lastName.trim();
  //   this.employeeService.searchEmployees(firstName, lastName).subscribe(
  //     (employees: Employee[]) => {
  //       this.searchResults = employees;
  //     },
  //     (error) => {
  //       console.error('Error during search:', error);
  //       this.searchResults = [];
  //     }
  //   );
  // }
  firstName: string='';
  lastName: string='';
  //employee: Employee = new Employee();
  employee: Employee | null = null; // Initialize with default values or null
  error: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  // search an employee by first name and last name
  searchEmployee() {
    this.employeeService.getEmployeeByFirstNameAndLastName(this.firstName, this.lastName)
      .subscribe(
        data => {
          this.employee = data;
          this.error = '';
        },
        error => {
          this.employee = null;
          this.error = error.error.message || 'An error occurred';
        }
      );
  }
}




import { Component } from '@angular/core';

import { SalaryService } from '../salary.service';
import { IncomeSalary } from '../income-salary';


@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  // employees: any[]=[];

  // constructor(private salaryService: SalaryService) {}

  // ngOnInit() {
  //   this.salaryService.getEmployees().subscribe(employees => {
  //     this.employees = employees;
  //   });
  // }

  // onDeleteEmployee(employeeId: number) {
  //   this.salaryService.deleteEmployee(employeeId).subscribe(() => {
  //     this.employees = this.employees.filter(emp => emp.id !== employeeId);
  //   });
  // }
  // employee:  IncomeSalary ={0,"","",0,0,0}
   employee = new IncomeSalary (0, '', '', 0, 0, 0,0);
  employeeId: number=0;
  salary: number=0;

  constructor(private salaryService: SalaryService) { }

  ngOnInit(): void {
  }

  calculateSalary() {
    this.salaryService.calculateSalary(this.employeeId).subscribe(
      (result: number) => {
        this.salary = result;
      },
      error => {
        console.log('Error calculating salary:', error);
      }
    );
  }

  createEmployee() {
    this.salaryService.createEmployee(this.employee).subscribe(
      (result: any) => {
        console.log('Employee created:', result);
      },
      error => {
        console.log('Error creating employee:', error);
      }
    );
  }

  getEmployeeById() {
    this.salaryService.getEmployeeById(this.employeeId).subscribe(
      (result: any) => {
        this.employee = result;
      },
      error => {
        console.log('Error retrieving employee:', error);
      }
    );
  }

  updateEmployee() {
    this.salaryService.updateEmployee(this.employeeId, this.employee).subscribe(
      (result: any) => {
        console.log('Employee updated:', result);
      },
      error => {
        console.log('Error updating employee:', error);
      }
    );
  }

  deleteEmployee() {
    this.salaryService.deleteEmployee(this.employeeId).subscribe(
      () => {
        console.log('Employee deleted.');
      },
      error => {
        console.log('Error deleting employee:', error);
      }
    );
  }

}

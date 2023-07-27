import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  

  employee: Employee = new Employee();
  
  constructor(private  EmployeeService: EmployeeService,
    private router: Router) { 
      
    }

  ngOnInit(): void {
  }

  saveEmployee(){
    this. EmployeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
      this.showAddSuccessAlert();
    },
    error => console.log(error));
  }
  createEmployeeWithDesignation(employee: Employee) {
    this.EmployeeService.createEmployeeWithDesignation(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => {
        console.log(error);
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
  showAddSuccessAlert() {
    alert('Employee added successfully!');
  }
}

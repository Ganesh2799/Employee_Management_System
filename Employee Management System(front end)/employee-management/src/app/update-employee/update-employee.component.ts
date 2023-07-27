// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-update-employee',
//   templateUrl: './update-employee.component.html',
//   styleUrls: ['./update-employee.component.css']
// })
// export class UpdateEmployeeComponent implements OnInit {

//   id: number=0;
//   employee: Employee = new Employee();
//   constructor(private EmployeeService: EmployeeService,
//     private route: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.EmployeeService.getEmployeeById(this.id).subscribe(data => {
//       this.employee = data;
//     }, error => console.log(error));
//   }

//   onSubmit(){
//     this.EmployeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
//       this.goToEmployeeList();
//       this.showUpdateSuccessAlert();
//     }
//     , error => console.log(error));
//   }

//   goToEmployeeList(){
//     this.router.navigate(['/employees']);
//   }
//   showUpdateSuccessAlert() {
//     alert('Employee updated successfully!');
//   }
// }
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employeeID: string = '';
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // Fetch the employee by ID and populate the form
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)
    );

    // Fetch the employee by employeeID and populate the form
    this.employeeID = this.route.snapshot.params['employeeID'];
    this.employeeService.getEmployeeByEmployeeId(this.employeeID).subscribe(
      data => {
        this.employee = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    // Update the employee with the provided ID
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
        this.showUpdateSuccessAlert();
      },
      error => console.log(error)
    );

    // Update the employee with the provided employeeID
    this.employeeService.updateEmployeeByEmployeeId(this.employeeID, this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
        this.showUpdateSuccessAlert();
      },
      error => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  showUpdateSuccessAlert() {
    alert('Employee updated successfully!');
  }
}


// import { Component } from '@angular/core';
// import { leave1 } from '../leave1';
// import { LeaveService } from '../leave.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-leave-list',
//   templateUrl: './leave-list.component.html',
//   styleUrls: ['./leave-list.component.css']
// })
// export class LeaveListComponent {
//   // employee_leave: leave1[]=[];

//   // constructor(private leaveService: LeaveService,
//   //   private router: Router) { }

//   // ngOnInit(): void {
//   //   this.getEmployee_leave();
//   // }
//   // private getEmployee_leave(){
//   //   this.leaveService.getleaveList().subscribe(data => {
//   //     this.employee_leave = data;
//   //   });
//   // }
//   employeeId: number = 0;
//   errorMessage: string | null = null;
//   leaves: leave1[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private leaveService: LeaveService
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const employeeIdFromRoute = +params.get('employeeId');
//       if (employeeIdFromRoute) {
//         this.employeeId = employeeIdFromRoute;
//         this.loadLeavesByEmployeeId(this.employeeId);
//       } else {
//         this.errorMessage = "Employee ID is missing or invalid.";
//       }
//     });
//   }

//   loadLeavesByEmployeeId(employeeId: number): void {
//     this.leaveService.getLeavesByEmployeeId(employeeId).subscribe(
//       data => {
//         this.leaves = data;
//         this.errorMessage = null;
//       },
//       error => {
//         this.leaves = [];
//         this.errorMessage = "Failed to fetch leaves data.";
//       }
//     );
//   }
  

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { leave1 } from '../leave1';
import { LeaveService } from '../leave.service';

// Replace 'path-to-leave-service' with the correct path to your LeaveService

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  employeeId: number = 0;
  errorMessage: string | null = null;
  leaves: leave1[] = [];

  constructor(
    private route: ActivatedRoute,
    private leaveService: LeaveService
  ) {}

  ngOnInit(): void {
    const employeeIdFromRoute = this.route.snapshot.paramMap.get('employeeId');
    if (employeeIdFromRoute !== null) {
      this.employeeId = +employeeIdFromRoute;
      this.loadLeavesByEmployeeId(this.employeeId);
    } else {
      this.errorMessage = "Employee ID is missing or invalid.";
    }
  }

  loadLeavesByEmployeeId(employeeId: number): void {
    this.leaveService.getLeavesByEmployeeId(employeeId).subscribe(
      data => {
        this.leaves = data;
        this.errorMessage = null;
      },
      error => {
        this.leaves = [];
        this.errorMessage = "Failed to fetch leaves data.";
      }
    );
  }
  // id: number = 0; // Provide a default value or initializer
  // leave1: leave1 = new leave1();


  // constructor(private route: ActivatedRoute, private leaveService: LeaveService) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.leave1 = new leave1();
  //   this.leaveService.getLeavesByEmployeeId(this.id).subscribe( data => {
  //     this.leave1 = data;
  //   });
  // }
}


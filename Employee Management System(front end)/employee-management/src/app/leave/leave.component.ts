
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { leave1 } from '../leave1';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  leaves: leave1[] = [];
  employeeId: number = 0;
  errorMessage: string | null = null;
  leave: leave1 = new leave1();
  params: any;

  constructor(private route: ActivatedRoute, private leaveService: LeaveService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const employeeIdFromRoute = params.get('employeeId');
      if (employeeIdFromRoute !== null) {
        this.employeeId = +employeeIdFromRoute;
        // get all leaves by employee ID
        this.leaveService.getLeavesByEmployeeId(this.employeeId).subscribe(
          data => {
            this.leaves = data;
            console.log(this.leaves);
          },
          error => {
            this.errorMessage = "Failed to fetch leaves data.";
          }
        );
      } else {
        this.errorMessage = "Employee ID is missing or invalid.";
      }
    });
  }

  onSubmit() {
    // Call the leaveService to save the leave data to the server
    this.leaveService.createLeave(this.leave).subscribe(
      (response) => {
        // Handle the successful response from the server, if needed
        console.log('Leave data saved successfully', response);
        // Clear the form after successful submission
        this.leave = new leave1();
      },
      (error) => {
        // Handle any errors that occur during the save operation
        console.error('Failed to save leave data', error);
      }
    );
  }
}



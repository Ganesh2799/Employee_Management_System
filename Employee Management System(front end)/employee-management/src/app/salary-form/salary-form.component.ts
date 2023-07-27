import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { SalaryService } from '../salary.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css']
})
export class SalaryFormComponent {
  // salaryForm: FormGroup;
  salaryForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private salaryService: SalaryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.salaryForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      basicSalary: ['', Validators.required],
      attendance: ['', Validators.required],
      otherDeductions: ['', Validators.required]
    });

    // Check if we are in "update" mode
    const employeeId = this.route.snapshot.params['id'];
    if (employeeId) {
      this.salaryService.getEmployeeById(employeeId).subscribe(employee => {
        if (employee) {
          this.salaryForm.patchValue(employee);
        } else {
          this.router.navigate(['/employees']);
        }
      });
    }
  }

  onSubmit() {
    if (this.salaryForm.valid) {
      const employee = this.salaryForm.value;
      const employeeId = this.route.snapshot.params['id'];

      if (employeeId) {
        this.salaryService.updateEmployee(employeeId, employee).subscribe(() => {
          this.router.navigate(['/income']); //employees
        });
      } else {
        this.salaryService.createEmployee(employee).subscribe(() => {
          this.router.navigate(['/income']);//employees
        });
      }
    }
  }
}



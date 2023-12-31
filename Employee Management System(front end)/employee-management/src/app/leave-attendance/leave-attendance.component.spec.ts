import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAttendanceComponent } from './leave-attendance.component';

describe('LeaveAttendanceComponent', () => {
  let component: LeaveAttendanceComponent;
  let fixture: ComponentFixture<LeaveAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

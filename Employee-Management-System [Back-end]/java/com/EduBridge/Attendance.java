package com.EduBridge;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name = "attendance")
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "status")
    private String status;

    

    public Attendance() {
    }

    public Attendance(Employee employee, LocalDate date, String status) {
        this.employee = employee;
        this.date = date;
        this.status = status;
    }

   

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


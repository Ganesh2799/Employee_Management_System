package com.EduBridge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SalaryService {

    @Autowired
    private IncomeSalaryRepository incomeSalaryRepository;

    public double calculateSalary(Long employeeId) {
      
        IncomeSalary employee = incomeSalaryRepository.findById(employeeId).orElse(null);
        if (employee == null) {
            return 0.0; 
        }

        
        double basicSalary = employee.getBasicSalary();


        int attendance = employee.getAttendance();

      
        double bonus = 0.0;
        if (attendance >= 25) {
            bonus = basicSalary * 0.1; 
        } else if (attendance >= 20) {
            bonus = basicSalary * 0.05; 
        }

      
        double deductions = 0.0;
        deductions += basicSalary * 0.1; 
        deductions += employee.getOtherDeductions(); 

     
        double netSalary = basicSalary + bonus - deductions;

       
        return netSalary;
    }
}

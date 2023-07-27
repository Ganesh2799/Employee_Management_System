package com.EduBridge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/incomeSalary")
public class IncomeSalaryController {

	@Autowired
    private SalaryService salaryService;

    @Autowired
    private IncomeSalaryRepository incomeSalaryRepository;
    
  
    


    
    @RequestMapping(value = "/{employeeId}/salary", method = RequestMethod.GET)
    public double calculateSalary(@PathVariable Long employeeId) {
        return salaryService.calculateSalary(employeeId);
    }

   
    @PostMapping("/")
    public IncomeSalary createEmployee(@RequestBody IncomeSalary employee) {
        return incomeSalaryRepository.save(employee);
    }

    
    @GetMapping("/{employeeId}")
    public IncomeSalary getEmployeeById(@PathVariable Long employeeId) {
        return incomeSalaryRepository.findById(employeeId).orElse(null);
    }

   
    @PutMapping("/{employeeId}")
    public IncomeSalary updateEmployee(@PathVariable Long employeeId, @RequestBody IncomeSalary updatedEmployee) {
        IncomeSalary employee = incomeSalaryRepository.findById(employeeId).orElse(null);
        if (employee == null) {
            return null; 
        }

        
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setBasicSalary(updatedEmployee.getBasicSalary());
        employee.setAttendance(updatedEmployee.getAttendance());
        employee.setOtherDeductions(updatedEmployee.getOtherDeductions());

        return incomeSalaryRepository.save(employee);
    }
    @CrossOrigin(methods = RequestMethod.OPTIONS)
    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }

    
    @DeleteMapping("/{employeeId}")
    public void deleteEmployee(@PathVariable Long employeeId) {
        incomeSalaryRepository.deleteById(employeeId);
    }
}


package com.EduBridge;
////
////import javax.persistence.Column;
////import javax.persistence.Entity;
////import javax.persistence.GeneratedValue;
////import javax.persistence.GenerationType;
////import javax.persistence.Id;
////import javax.persistence.Table;
////
////@Entity
////	@Table(name = "employees")
////	public class Employee {
////		
////		@Id
////		@GeneratedValue(strategy = GenerationType.IDENTITY)
////		private long id;
////		
////		@Column(name = "employeeId")
////		private String employeeId;
////		
////		@Column(name = "first_name")
////		private String firstName;
////
////		@Column(name = "last_name")
////		private String lastName;
////		
////		@Column(name = "email_id")
////		private String emailId;
////		
////		@Column(name = "designation")
////		private String designation;
////		
////		@Column(name = "salary")
////		private Integer salary;
////		
////		public Employee() {
////			
////		}
////		
////		public Employee(String firstName, String lastName, String emailId,String designation,Integer salary,String employeeId ) {
////			super();
////			this.firstName = firstName;
////			this.lastName = lastName;
////			this.emailId = emailId;
////			this.designation=designation;
////			this.salary=salary;
////			this.employeeId=employeeId;
////		}
////		public long getId() {
////			return id;
////		}
////		public void setId(long id) {
////			this.id = id;
////		}
////		public String getFirstName() {
////			return firstName;
////		}
////		public void setFirstName(String firstName) {
////			this.firstName = firstName;
////		}
////		public String getLastName() {
////			return lastName;
////		}
////		public void setLastName(String lastName) {
////			this.lastName = lastName;
////		}
////		public String getEmailId() {
////			return emailId;
////		}
////		public void setEmailId(String emailId) {
////			this.emailId = emailId;
////		}
////		public String getDesignation() {
////			return designation;
////		}
////		public void setDesignation(String designation) {
////			this.designation = designation;
////		}
////		public Integer getSalary() {
////			return salary;
////		}
////		public void setSalary(Integer salary) {
////			this.salary = salary;
////		}
////		public String getEmployeeId() {
////			return employeeId;
////		}
////		public void setEmployeeId(String employeeId) {
////			this.employeeId=employeeId;
////		}
////	}
////
////
////package com.EduBridge;
////
////import javax.persistence.CascadeType;
////import javax.persistence.Column;
////import javax.persistence.Entity;
////import javax.persistence.GeneratedValue;
////import javax.persistence.GenerationType;
////import javax.persistence.Id;
////import javax.persistence.OneToOne;
////import javax.persistence.Table;
////
////@Entity
////@Table(name = "employees")
////public class Employee {
////    
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private long id;
////    
////    @Column(name = "employeeId")
////    private String employeeId;
////    
////    @Column(name = "first_name")
////    private String firstName;
////
////    @Column(name = "last_name")
////    private String lastName;
////    
////    @Column(name = "email_id")
////    private String emailId;
////    
////    @Column(name = "designation")
////    private String designation;
////    
////    @Column(name = "salary")
////    private Integer salary;
////    
////    @OneToOne(mappedBy = "employee", cascade = CascadeType.ALL)
////    private Leave leave;
////    
////    public Employee() {
////        
////    }
////    
////    public Employee(String firstName, String lastName, String emailId, String designation, Integer salary, String employeeId) {
////        super();
////        this.firstName = firstName;
////        this.lastName = lastName;
////        this.emailId = emailId;
////        this.designation = designation;
////        this.salary = salary;
////        this.employeeId = employeeId;
////    }
////    
////    public long getId() {
////        return id;
////    }
////    
////    public void setId(long id) {
////        this.id = id;
////    }
////    
////    public String getFirstName() {
////        return firstName;
////    }
////    
////    public void setFirstName(String firstName) {
////        this.firstName = firstName;
////    }
////    
////    public String getLastName() {
////        return lastName;
////    }
////    
////    public void setLastName(String lastName) {
////        this.lastName = lastName;
////    }
////    
////    public String getEmailId() {
////        return emailId;
////    }
////    
////    public void setEmailId(String emailId) {
////        this.emailId = emailId;
////    }
////    
////    public String getDesignation() {
////        return designation;
////    }
////    
////    public void setDesignation(String designation) {
////        this.designation = designation;
////    }
////    
////    public Integer getSalary() {
////        return salary;
////    }
////    
////    public void setSalary(Integer salary) {
////        this.salary = salary;
////    }
////    
////    public String getEmployeeId() {
////        return employeeId;
////    }
////    
////    public void setEmployeeId(String employeeId) {
////        this.employeeId = employeeId;
////    }
////    
////    public Leave getLeave() {
////        return leave;
////    }
////    
////    public void setLeave(Leave leave) {
////        this.leave = leave;
////        
////    }
////}
////
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "employees")
//public class Employee {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    @Column(name = "employeeId")
//private String employeeId;
//
//@Column(name = "first_name")
//private String firstName;
//
//@Column(name = "last_name")
//private String lastName;
//
//@Column(name = "email_id")
//private String emailId;
//
//@Column(name = "designation")
//private String designation;
//
//@Column(name = "salary")
//private Integer salary;
//
//    public Long getId() {
//	return id;
//}
//
//    public void setId(Long id) {
//	this.id = id;
//}
//
//    public String getEmployeeId() {
//	return employeeId;
//}
//
//    public void setEmployeeId(String employeeId) {
//	this.employeeId = employeeId;
//}
//
//    public String getFirstName() {
//	return firstName;
//}
//
//    public void setFirstName(String firstName) {
//	this.firstName = firstName;
//}
//
//    public String getLastName() {
//	return lastName;
//}
//
//    public void setLastName(String lastName) {
//	this.lastName = lastName;
//}
//
//    public String getEmailId() {
//	return emailId;
//}
//
//    public void setEmailId(String emailId) {
//	this.emailId = emailId;
//}
//
//    public String getDesignation() {
//	return designation;
//}
//
//    public void setDesignation(String designation) {
//	this.designation = designation;
//}
//
//    public Integer getSalary() {
//	return salary;
//}
//
//    public void setSalary(Integer salary) {
//	this.salary = salary;
//}
//
//	public Employee(Long id, String employeeId, String firstName, String lastName, String emailId, String designation,
//		Integer salary,  List<Attendance> attendances) {
//	super();
//	this.id = id;
//	this.employeeId = employeeId;
//	this.firstName = firstName;
//	this.lastName = lastName;
//	this.emailId = emailId;
//	this.designation = designation;
//	this.salary = salary;
//	
//	this.attendances = attendances;
//	
//}
//
//	public Employee() {
//	super();
//}
//
//	// Other employee fields
//
//  
//
//    @OneToMany(mappedBy = "employee")
//    private List<Attendance> attendances;
//
//   
//
//    // Constructors, getters, and setters
//
//    // ...
//    
//  
//
//    public List<Attendance> getAttendances() {
//        return attendances;
//    }
//
//    public void setAttendances(List<Attendance> attendances) {
//        this.attendances = attendances;
//    }
//
//
//
//  
//    }
//
//

import javax.persistence.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employeeId")
    private String employeeId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "designation")
    private String designation;

    @Column(name = "salary")
    private Integer salary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Employee(Long id, String employeeId, String firstName, String lastName, String emailId, String designation,
            Integer salary, List<Attendance> attendances) {
        super();
        this.id = id;
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.designation = designation;
        this.salary = salary;
        this.attendances = attendances;
    }

    public Employee() {
        super();
    }

    @OneToMany(mappedBy = "employee")
    private List<Attendance> attendances;

    

    public List<Attendance> getAttendances() {
        return attendances;
    }

    public void setAttendances(List<Attendance> attendances) {
        this.attendances = attendances;
    }
}


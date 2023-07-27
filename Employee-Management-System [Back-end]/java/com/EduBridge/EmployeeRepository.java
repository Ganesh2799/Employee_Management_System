package com.EduBridge;



	import java.util.List;
    import java.util.Optional;

    import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

	@Repository
	public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	    Optional<Employee> findByEmployeeId(String employeeId);
	   
		List<Employee> findByFirstNameContainingAndLastNameContaining(String firstName, String lastName);
		List<Employee> findByLastNameContaining(String lastName);
		List<Employee> findByFirstNameContaining(String firstName);
		 Optional<Employee> findByFirstNameAndLastName(String firstName, String lastName);
	
	}



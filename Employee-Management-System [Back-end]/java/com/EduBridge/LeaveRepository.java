package com.EduBridge;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LeaveRepository extends JpaRepository<Leave, Long> {

  
    List<Leave> findByEmployeeId(Long employeeId);
}




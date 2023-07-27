package com.EduBridge;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendances")
public class AttendanceController {
    private final AttendanceRepository attendanceRepository;

    @Autowired
    public AttendanceController(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @GetMapping
    public List<Attendance> getAllAttendance() {
        return attendanceRepository.findAll();
    }

    @PostMapping
    public Attendance addAttendance(@RequestBody Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    @GetMapping("/{id}")
    public Attendance getAttendanceById(@PathVariable("id") long id) {
        return attendanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Attendance not found with id: " + id));
    }

    @PutMapping("/{id}")
    public Attendance updateAttendance(@PathVariable("id") long id, @RequestBody Attendance updatedAttendance) {
        Attendance existingAttendance = attendanceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Attendance not found with id: " + id));

        existingAttendance.setDate(updatedAttendance.getDate());
        existingAttendance.setStatus(updatedAttendance.getStatus());

        return attendanceRepository.save(existingAttendance);
    }

    @DeleteMapping("/{id}")
    public void deleteAttendance(@PathVariable("id") long id) {
        attendanceRepository.deleteById(id);
    }
}


package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Integer> {
    public Patient save(Patient patient);

    public Patient findByUsernameAndPassword(String username, String password);

    public Patient findByPatientId(int patientId);

    public List<Patient> findAllByDeclined(boolean declined);

    public Patient findByUsername(String username);
}

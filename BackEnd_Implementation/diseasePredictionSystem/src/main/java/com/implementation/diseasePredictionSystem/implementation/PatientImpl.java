package com.implementation.diseasePredictionSystem.implementation;

import com.implementation.diseasePredictionSystem.dto.Patient;
import com.implementation.diseasePredictionSystem.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PatientImpl {

    @Autowired
    private PatientRepository patientRepository;

    public Patient savePatient(Patient patient){
        return patientRepository.save(patient);
    }

    public Patient getPatient(String username, String password){
        return patientRepository.findByUsernameAndPassword(username, password);
    }

}

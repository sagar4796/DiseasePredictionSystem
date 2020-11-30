package com.implementation.diseasePredictionSystem.implementation;

import com.implementation.diseasePredictionSystem.dto.Patient;
import com.implementation.diseasePredictionSystem.dto.Request;
import com.implementation.diseasePredictionSystem.repository.PatientRepository;
import com.implementation.diseasePredictionSystem.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PatientImpl {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private RequestRepository requestRepository;

    public Patient savePatient(Patient patient){
        return patientRepository.save(patient);
    }

    public Patient getPatient(String username, String password){
        return patientRepository.findByUsernameAndPassword(username, password);
    }

    public Request savePatientRequest(Request request){
        return requestRepository.save(request);
    }

    public List<Request> getPatientRequestByDoctorId(int doctorId, boolean complete){
        return requestRepository.findAllByDoctorIdAndComplete(doctorId, complete);
    }

    public Patient getPatientByPatientId(int patientId){
        return patientRepository.findByPatientId(patientId);
    }

    public List<Patient> getPatientListByDeclined(boolean declined){
        return patientRepository.findAllByDeclined(declined);
    }
}

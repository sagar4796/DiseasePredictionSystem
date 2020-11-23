package com.implementation.diseasePredictionSystem.implementation;

import com.implementation.diseasePredictionSystem.dto.Doctor;
import com.implementation.diseasePredictionSystem.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DoctorImpl {

    @Autowired
    DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public Doctor getDoctor(String username, String pasword){
        return doctorRepository.findByUsernameAndPassword(username, pasword);
    }

    public List<Doctor> getDoctorByCity(int cityId){
        return doctorRepository.findAllByCityId(cityId);
    }
}

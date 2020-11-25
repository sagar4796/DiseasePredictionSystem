package com.implementation.diseasePredictionSystem.implementation;

import com.implementation.diseasePredictionSystem.dto.Certificate;
import com.implementation.diseasePredictionSystem.dto.Doctor;
import com.implementation.diseasePredictionSystem.repository.CertificateRepository;
import com.implementation.diseasePredictionSystem.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DoctorImpl {

    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    CertificateRepository certificateRepository;

    public Doctor saveDoctor(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public Doctor getDoctor(String username, String pasword){
        return doctorRepository.findByUsernameAndPassword(username, pasword);
    }

    public List<Doctor> getDoctorByCity(int cityId){
        return doctorRepository.findAllByCityId(cityId);
    }

    public Certificate saveDoctorCertificate(Certificate certificate){
        return certificateRepository.save(certificate);
    }

    public List<Doctor> getDoctorByIsVerified(boolean verified, boolean declined){
        return doctorRepository.findAllByVerifiedAndDeclined(verified, declined);
    }

    public Doctor updateDoctorIsVerifiedByDoctorId(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public  List<Doctor> getDoctorByDeclined(boolean declined){
        return  doctorRepository.findAllByDeclined(declined);
    }
}

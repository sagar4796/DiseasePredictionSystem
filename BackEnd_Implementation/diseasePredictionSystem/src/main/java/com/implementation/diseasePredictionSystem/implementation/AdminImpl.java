package com.implementation.diseasePredictionSystem.implementation;

import com.implementation.diseasePredictionSystem.dto.Admin;
import com.implementation.diseasePredictionSystem.dto.Disease;
import com.implementation.diseasePredictionSystem.dto.Symptom;
import com.implementation.diseasePredictionSystem.repository.AdminRepository;
import com.implementation.diseasePredictionSystem.repository.DiseaseRepository;
import com.implementation.diseasePredictionSystem.repository.SymptomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AdminImpl {

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    DiseaseRepository diseaseRepository;

    @Autowired
    SymptomRepository symptomRepository;

    public Admin getAdmin(String username, String password){
        return adminRepository.findByUsernameAndPassword(username, password);
    }

    public List<Disease> getDisease(){
        return diseaseRepository.findAll();
    }

    public List<Symptom> getSymptom(){
        return symptomRepository.findAll();
    }

    public List<Symptom> getSortedSymptoms(){
        return symptomRepository.findAllByOrderBySymptomName();
    }
}

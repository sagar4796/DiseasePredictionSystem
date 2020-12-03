package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SymptomRepository extends JpaRepository<Symptom, Integer> {
    public List<Symptom> findAll();

    public List<Symptom> findAllByOrderBySymptomName();
}

package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiseaseRepository extends JpaRepository<Disease, Integer> {
    public List<Disease> findAll();
}

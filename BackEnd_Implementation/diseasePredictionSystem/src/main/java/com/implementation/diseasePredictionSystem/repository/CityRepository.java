package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.City;
import com.implementation.diseasePredictionSystem.dto.State;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CityRepository extends JpaRepository<City, Integer> {

    public List<City> findAllByStateId(int stateId);

    public  List<City>  findAll();
}

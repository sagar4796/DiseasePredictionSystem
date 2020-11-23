package com.implementation.diseasePredictionSystem.implementation;


import com.implementation.diseasePredictionSystem.dto.City;
import com.implementation.diseasePredictionSystem.dto.State;
import com.implementation.diseasePredictionSystem.repository.CityRepository;
import com.implementation.diseasePredictionSystem.repository.PatientRepository;
import com.implementation.diseasePredictionSystem.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LocationImpl {

    @Autowired
    StateRepository stateRepository;

    @Autowired
    CityRepository  cityRepository;

    public List<State> getState(){
        return stateRepository.findAll();
    }

    public  List<City> getCityByState(int stateId){
        return cityRepository.findAllByStateId(stateId);
    }
}

package com.implementation.diseasePredictionSystem.controller;


import com.implementation.diseasePredictionSystem.service.LocationService;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class LocationController {

    @Autowired
    LocationService locationService;

    @GetMapping("location/getAllState")
    public Response getState(){
        return locationService.getState();
    }

    @GetMapping("location/getCityByState/{stateId}")
    public Response getCityByState(@PathVariable int stateId){
        return locationService.getCityByState(stateId);
    }
}

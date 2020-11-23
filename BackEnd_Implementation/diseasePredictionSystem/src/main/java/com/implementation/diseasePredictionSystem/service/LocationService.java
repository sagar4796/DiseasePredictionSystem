package com.implementation.diseasePredictionSystem.service;


import com.implementation.diseasePredictionSystem.dto.City;
import com.implementation.diseasePredictionSystem.dto.State;
import com.implementation.diseasePredictionSystem.implementation.LocationImpl;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LocationService {

    @Autowired
    LocationImpl locationImpl;

    public Response getState(){
        List<State> result= new ArrayList();
        try {
            result = locationImpl.getState();
            if (result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getCityByState(int stateId){
        List<City> result = new ArrayList();
        try{
            result = locationImpl.getCityByState(stateId);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }




    private Response buildResponse(int status, String statusMsg, Object obj) {
        Response response = new Response();
        response.setStatus(status);
        response.setStatus_msg(statusMsg);
        response.setResponse(obj);
        return response;
    }
}

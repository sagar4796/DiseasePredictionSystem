package com.implementation.diseasePredictionSystem.service;

import com.implementation.diseasePredictionSystem.dto.Admin;
import com.implementation.diseasePredictionSystem.dto.Disease;
import com.implementation.diseasePredictionSystem.dto.Symptom;
import com.implementation.diseasePredictionSystem.implementation.AdminImpl;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminImpl adminImpl;

    public Response getAdmin(String username, String password){
        Admin result;
        try{
            result = adminImpl.getAdmin(username, password);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getDisease(){
        List<Disease> result;
        try {
            result = adminImpl.getDisease();
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }


    public Response getSymptom(){
        List<Symptom> result;
        try {
            result = adminImpl.getSymptom();
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getSortedSymptoms(){
        List<Symptom> result;
        try {
            result = adminImpl.getSortedSymptoms();
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

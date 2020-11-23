package com.implementation.diseasePredictionSystem.service;

import com.implementation.diseasePredictionSystem.dto.Doctor;
import com.implementation.diseasePredictionSystem.implementation.DoctorImpl;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DoctorService {

    @Autowired
    DoctorImpl doctorImpl;

    public Response saveDoctor(Doctor doctor){
        Doctor result;
        try{
            result = doctorImpl.saveDoctor(doctor);
            if(result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }
        catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }


    public  Response getDoctor(String username, String pasword){
        Doctor result;
        try{
            result = doctorImpl.getDoctor(username, pasword);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }
        catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }


    public Response getDoctorByCity(int cityId){
        List<Doctor> result = new ArrayList();
        try{
            result = doctorImpl.getDoctorByCity(cityId);
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

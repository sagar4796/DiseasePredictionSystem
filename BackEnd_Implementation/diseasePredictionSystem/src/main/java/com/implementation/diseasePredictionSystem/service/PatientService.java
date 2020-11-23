package com.implementation.diseasePredictionSystem.service;


import com.implementation.diseasePredictionSystem.dto.Patient;
import com.implementation.diseasePredictionSystem.implementation.PatientImpl;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientImpl patientImpl;


    public Response savePatient(Patient patient){
        Patient result;
        try{
            result = patientImpl.savePatient(patient);
            if(result == null){
                return buildResponse(0, "REGISTRATION_FAILED", result);
            }
        } catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "REGISTRATION_SUCCESFULL", result);
    }

    public Response getPatient(String username, String password){
        Patient result;
        try{
            result = patientImpl.getPatient(username, password);
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

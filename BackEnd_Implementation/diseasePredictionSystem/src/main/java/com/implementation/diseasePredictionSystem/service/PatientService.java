package com.implementation.diseasePredictionSystem.service;


import com.implementation.diseasePredictionSystem.dto.Patient;
import com.implementation.diseasePredictionSystem.dto.Request;
import com.implementation.diseasePredictionSystem.implementation.PatientImpl;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Response savePatientRequest(Request request){
        Request result;
        try {
            result = patientImpl.savePatientRequest(request);
            if(result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }


    public Response getPatientRequestByDoctorId(int doctorId, boolean complete){
        List<Request> result;
        try{
            result = patientImpl.getPatientRequestByDoctorId(doctorId, complete);
            if(result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getPatientByPatientId(int patientId){
        Patient result;
        try {
            result = patientImpl.getPatientByPatientId(patientId);
            if(result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getPatientListByDeclined(boolean declined){
        List<Patient> result;
        try{
            result = patientImpl.getPatientListByDeclined(declined);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getRequestByPatientId(int patientId){
        List<Request> result;
        try {
            result = patientImpl.getRequestByPatientId(patientId);
            if(result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getResponseByRequestId(int requestId){
        List<com.implementation.diseasePredictionSystem.dto.Response> result;
        try{
            result = patientImpl.getResponseByRequestId(requestId);
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

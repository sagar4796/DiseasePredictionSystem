package com.implementation.diseasePredictionSystem.service;

import com.implementation.diseasePredictionSystem.dto.Certificate;
import com.implementation.diseasePredictionSystem.dto.Doctor;
import com.implementation.diseasePredictionSystem.dto.Request;
import com.implementation.diseasePredictionSystem.implementation.DoctorImpl;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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


    public Response saveDoctorCertificate(int doctorId, MultipartFile file){
        Certificate result;
        try{
            Certificate certificate = new Certificate();
            certificate.setDoctorId(doctorId);
            byte[] byteOfCertificate = new byte[file.getBytes().length];
            int i = 0;
            for(byte b : file.getBytes()){
                byteOfCertificate[i++] = b;
            }
            certificate.setCertificate(byteOfCertificate);
            result = doctorImpl.saveDoctorCertificate(certificate);
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getDoctorByIsVerified(boolean verified, boolean declined){
        List<Doctor> result;
        try{
            result = doctorImpl.getDoctorByIsVerified(verified, declined);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response updateDoctorIsVerifiedByDoctorId(Doctor doctor){
        Doctor result;
        try {
            result = doctorImpl.updateDoctorIsVerifiedByDoctorId(doctor);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e) {
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getDoctorByDeclined(boolean declined){
        List<Doctor> result;
        try{
            result = doctorImpl.getDoctorByDeclined(declined);
            if(result == null) {
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getCertificateByDoctorId(int doctorId){
        Certificate result;
        try{
            result = doctorImpl.getCertificateByDoctorId(doctorId);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response saveResponse(com.implementation.diseasePredictionSystem.dto.Response response){
        com.implementation.diseasePredictionSystem.dto.Response result;
        try {
            result = doctorImpl.saveResponse(response);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getRequestByRequestId(int requestId){
        Request result;
        try{
            result = doctorImpl.getRequestByRequestId(requestId);
            if(result == null){
                return buildResponse(0, "FAILED", result);
            }
        }catch (Exception e){
            return buildResponse(0, "SERVER_EXCEPTION", e);
        }
        return buildResponse(1, "SUCCESFULL", result);
    }

    public Response getDoctorByDoctorId(int doctorId){
        Doctor result;
        try {
            result = doctorImpl.getDoctorByDoctorId(doctorId);
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

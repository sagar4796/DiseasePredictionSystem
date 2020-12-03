package com.implementation.diseasePredictionSystem.controller;

import com.implementation.diseasePredictionSystem.dto.Patient;
import com.implementation.diseasePredictionSystem.dto.Request;
import com.implementation.diseasePredictionSystem.service.PatientService;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("patient/savePatient")
    public Response savePatient(@RequestBody Patient patient){
        return patientService.savePatient(patient);
    }

    @GetMapping("patient/getPatient/{username}/{password}")
    public Response getPatient(@PathVariable String username, @PathVariable String password){
        return patientService.getPatient(username, password);
    }

    @PostMapping("patient/savePatientRequest")
    public Response savePatientRequest(@RequestBody Request request){
        return patientService.savePatientRequest(request);
    }

    @GetMapping("patient/getPatientRequest/{doctorId}/{complete}")
    public Response getPatientRequestByDoctorId(@PathVariable int doctorId, @PathVariable boolean complete){
        return patientService.getPatientRequestByDoctorId(doctorId, complete);
    }

    @GetMapping("patient/getPatient/getPatientByPatientId/{patientId}")
    public Response getPatientByPatientId(@PathVariable int patientId){
        return patientService.getPatientByPatientId(patientId);
    }

    @GetMapping("patient/getPatient/getPatientByDeclined/{declined}")
    public Response getPatientListByDeclined(@PathVariable boolean declined){
        return patientService.getPatientListByDeclined(declined);
    }

    @GetMapping("request/getRequest/getRequestByPatientId/{patientId}")
    public Response getRequestByPatientId(@PathVariable int patientId){
        return patientService.getRequestByPatientId(patientId);
    }

    @GetMapping("response/getResponse/getResponseByRequestId/{requestId}")
    public Response getResponseByRequestId(@PathVariable int requestId){
        return patientService.getResponseByRequestId(requestId);
    }
}

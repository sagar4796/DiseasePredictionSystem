package com.implementation.diseasePredictionSystem.controller;

import com.implementation.diseasePredictionSystem.dto.Patient;
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
}

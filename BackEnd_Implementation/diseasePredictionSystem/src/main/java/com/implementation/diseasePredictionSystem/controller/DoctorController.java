package com.implementation.diseasePredictionSystem.controller;


import com.implementation.diseasePredictionSystem.dto.Doctor;
import com.implementation.diseasePredictionSystem.service.DoctorService;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @PostMapping("doctor/saveDoctor")
    public Response saveDoctor(@RequestBody Doctor doctor){
        return doctorService.saveDoctor(doctor);
    }

    @GetMapping("doctor/getDoctor/{username}/{password}")
    public Response getDoctor(@PathVariable String username, @PathVariable String password){
        return doctorService.getDoctor(username, password);
    }

    @GetMapping("doctor/getDoctor/getDoctorByCity/{cityId}")
    public Response getDoctorByCity(@PathVariable int cityId){
        return doctorService.getDoctorByCity(cityId);
    }


}

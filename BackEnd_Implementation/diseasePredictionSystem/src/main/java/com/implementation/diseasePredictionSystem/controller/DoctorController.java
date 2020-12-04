package com.implementation.diseasePredictionSystem.controller;


import com.implementation.diseasePredictionSystem.dto.Doctor;
import com.implementation.diseasePredictionSystem.service.DoctorService;
import com.implementation.diseasePredictionSystem.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping("doctor/saveDoctor/certificate/{doctorId}")
    public Response saveDoctorCertificate(@PathVariable int doctorId,@RequestParam("imagefile") MultipartFile file){
        return doctorService.saveDoctorCertificate(doctorId, file);
    }

    @GetMapping("doctor/getDoctor/getDoctorByIsVerified/{verified}")
    public Response getDoctorByIsVerified(@PathVariable boolean verified){
        boolean declined = false;
        return doctorService.getDoctorByIsVerified(verified, declined);
    }

    @GetMapping("doctor/getDoctor/getDoctorByIsDeclined/{declined}")
    public  Response getDoctorByDeclined(@PathVariable boolean declined){
        return doctorService.getDoctorByDeclined(declined);
    }

    @PutMapping("doctor/updateDoctor")
    public Response updateDoctorIsVerifiedByDoctorId(@RequestBody Doctor doctor){
        return doctorService.updateDoctorIsVerifiedByDoctorId(doctor);
    }

    @GetMapping("doctor/getCertificate/getCertificateByDoctorId/{doctorId}")
    public  Response getCertificateByDoctorId(@PathVariable int doctorId){
        return  doctorService.getCertificateByDoctorId(doctorId);
    }

    @PostMapping("doctor/saveResponse")
    public Response saveResponse(@RequestBody com.implementation.diseasePredictionSystem.dto.Response response){
        return doctorService.saveResponse(response);
    }

    @GetMapping("request/getRequest/getRequestbyRequestId/{requestId}")
    public Response getRequestByRequestId(@PathVariable int requestId){
        return doctorService.getRequestByRequestId(requestId);
    }

    @GetMapping("doctor/getDoctor/getDoctorByDoctorId/{doctorId}")
    public Response getDoctorByDoctorId(@PathVariable int doctorId){
        return doctorService.getDoctorByDoctorId(doctorId);
    }

    @GetMapping("doctor/getDoctor/getDoctorByUsername/{username}")
    public Response getDoctorByUsername(@PathVariable String username){
        return doctorService.getDoctorByUsername(username);
    }

}

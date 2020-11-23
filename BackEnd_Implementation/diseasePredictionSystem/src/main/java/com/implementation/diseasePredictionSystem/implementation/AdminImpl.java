package com.implementation.diseasePredictionSystem.implementation;

import com.implementation.diseasePredictionSystem.dto.Admin;
import com.implementation.diseasePredictionSystem.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AdminImpl {

    @Autowired
    AdminRepository adminRepository;

    public Admin getAdmin(String username, String password){
        return adminRepository.findByUsernameAndPassword(username, password);
    }
}

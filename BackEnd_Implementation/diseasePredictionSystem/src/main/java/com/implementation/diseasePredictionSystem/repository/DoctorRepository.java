package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

    public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    public Doctor save(Doctor doctor);

    public Doctor findByUsernameAndPassword(String username, String password);

    public List<Doctor> findAllByCityId(int cityId);

    public List<Doctor> findAllByVerifiedAndDeclined(boolean verified, boolean declined);

    public List<Doctor> findAllByDeclined(boolean declined);
}

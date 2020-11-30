package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.Request;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Integer> {
    public Request save(Request request);

    public List<Request> findAllByDoctorIdAndComplete(int doctorId, boolean complete);

    public Request findByRequestId(int requestId);
}

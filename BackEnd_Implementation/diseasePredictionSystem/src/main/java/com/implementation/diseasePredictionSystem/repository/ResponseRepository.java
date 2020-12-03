package com.implementation.diseasePredictionSystem.repository;

import com.implementation.diseasePredictionSystem.dto.Response;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResponseRepository extends JpaRepository<Response, Integer> {
    public Response save(Response response);

    public List<Response> findAllByRequestId(int requestId);
}

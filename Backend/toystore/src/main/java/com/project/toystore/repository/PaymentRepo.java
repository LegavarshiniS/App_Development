package com.project.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.toystore.model.Payment;


@Repository
public interface PaymentRepo extends JpaRepository<Payment, Integer> {
}

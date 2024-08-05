package com.project.toystore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.toystore.model.Payment;
import com.project.toystore.repository.PaymentRepository;

import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepo;

    public Payment create(Payment payment) {
        return paymentRepo.save(payment);
    }

    public List<Payment> getAll() {
        return paymentRepo.findAll();
    }

    public Payment getById(int paymentId) {
        return paymentRepo.findById(paymentId).orElse(null);
    }

    public boolean update(int paymentId, Payment payment) {
        if (this.getById(paymentId) == null) {
            return false;
        }
        try {
            paymentRepo.save(payment);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int paymentId) {
        if (this.getById(paymentId) == null) {
            return false;
        }
        paymentRepo.deleteById(paymentId);
        return true;
    }
}

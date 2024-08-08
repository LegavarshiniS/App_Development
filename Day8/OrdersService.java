package com.project.toystore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.toystore.model.Orders;
import com.project.toystore.repository.OrdersRepo;

import java.util.List;
@Service
public class OrdersService {
    @Autowired
    OrdersRepo orderRepo;

    public Orders create(Orders order) {
        return orderRepo.save(order);
    }

    public List<Orders> getAll() {
        return orderRepo.findAll();
    }

    public Orders getId(int oid) {
        return orderRepo.findById(oid).orElse(null);
    }

    public boolean update(int oid, Orders order) {
        if (this.getId(oid) == null) {
            return false;
        }
        try {
            orderRepo.save(order);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int oid) {
        if (this.getId(oid) == null) {
            return false;
        }
        orderRepo.deleteById(oid);
        return true;
    }
}
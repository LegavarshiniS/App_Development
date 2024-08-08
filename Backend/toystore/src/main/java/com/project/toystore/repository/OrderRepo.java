package com.project.toystore.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.project.toystore.model.Orders;

public interface OrderRepo extends JpaRepository<Orders, Integer> {
}
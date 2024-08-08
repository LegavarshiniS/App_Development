package com.project.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.toystore.model.Buy;


public interface BuyRepo extends JpaRepository<Buy, Integer> {
}

package com.project.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.toystore.model.Product;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Integer> {
    
    List<Product> findByCategory(String category);
}

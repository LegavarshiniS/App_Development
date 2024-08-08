package com.project.toystore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.toystore.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String username);
}

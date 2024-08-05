package com.project.toystore.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.project.toystore.model.User;


public interface UserRepository extends JpaRepository<User,Integer> {

}
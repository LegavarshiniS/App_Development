package com.project.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.toystore.model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {
}
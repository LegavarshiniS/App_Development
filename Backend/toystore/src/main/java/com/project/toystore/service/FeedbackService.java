package com.project.toystore.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.toystore.model.Feedback;
import com.project.toystore.repository.FeedbackRepo;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    FeedbackRepo feedbackRepo;

    public Feedback create(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> getAll() {
        return feedbackRepo.findAll();
    }

    public Feedback getId(int fid) {
        return feedbackRepo.findById(fid).orElse(null);
    }

    public boolean update(int fid, Feedback feedback) {
        if (this.getId(fid) == null) {
            return false;
        }
        try {
            feedbackRepo.save(feedback);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public boolean delete(int fid) {
        if (this.getId(fid) == null) {
            return false;
        }
        feedbackRepo.deleteById(fid);
        return true;
    }
}
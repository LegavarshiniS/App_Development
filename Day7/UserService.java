package com.project.toystore.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.toystore.model.User;
import com.project.toystore.repository.UserRepository;

import java.util.List;
@Service
public class UserService {
     @Autowired
     UserRepository ev;
     public User create(User e){
      return ev.save(e);
     }
     public List<User> getAll(){
      return ev.findAll();
     }
     public User getId(int uid){
      return ev.findById(uid).orElse(null);
     }
     public boolean update(int uid,User ee){
          if(this.getId(uid)==null)
          {
              return false;
          }
          try{
              ev.save(ee);
          }
          catch(Exception ex)
          {
              return false;
          }
          return  true;
     }
     public boolean delete(int uid){
          if(this.getId(uid)==null){
             return false;
          }
          ev.deleteById(uid);
          return true;
     }
}
package com.project.toystore.model;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class User {
     @Id
     private int uid;
     public int getUid() {
      return uid;
    }
    public void setEid(int uid) {
      this.uid = uid;
    }
    private String username;
    private String password;

    public User(){

    }
    public User(int uid, String username, String password) {
        this.uid = uid;
        this.username = username;
        this.password = password;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }    
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Product> product=new ArrayList<>();

    public List<Product> getOrderdata() {
        return product;
    }

    public void setOrderdata(List<Product> product) {
        this.product= product;
    }


}


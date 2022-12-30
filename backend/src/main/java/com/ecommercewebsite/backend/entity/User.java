package com.ecommercewebsite.backend.entity;

import com.ecommercewebsite.backend.dto.Orders;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User{
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String dataOfBirth;
    private String country;
    private String email;
    private String username;
    private String password;

    public User(String id, String firstName, String lastName, String dataOfBirth, String country, String email, String username, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dataOfBirth = dataOfBirth;
        this.country = country;
        this.email = email;
        this.username = username;
        this.password = password;
    }


    @OneToMany(mappedBy = "user")
    private List<Orders> order;

}
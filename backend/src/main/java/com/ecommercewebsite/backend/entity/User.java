package com.ecommercewebsite.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class User{
    @Id
    @Column(name = "user_id")
    private String id;
    @Embedded
    private Name name;
    private String dataOfBirth;
    @Embedded
    private Address address;
    private String email;
    private String username;
    private String password;

    public User(String id, Name lastName, String dataOfBirth, Address address, String email, String username, String password) {
        this.id = id;
        this.name = name;
        this.dataOfBirth = dataOfBirth;
        this.address = address;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    @OneToOne(mappedBy = "user")
    private ShoppingCart shoppingCart;

    @OneToMany(mappedBy = "user")
    private List<Orders> orders;
}
package com.ecommercewebsite.backend.dto;

import com.ecommercewebsite.backend.entity.LoginCredentials;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {
    private String id;
    private String firstName;
    private String lastName;
    private String dataOfBirth;
    private String country;
    private String email;
    private String username;
    private String password;

//    public UserDto(String id, String firstName, String lastName, String country, String email, String username, String password) {
//        this.id = id;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.country = country;
//        this.email = email;
//        this.username = username;
//        this.password = password;
//    }
}

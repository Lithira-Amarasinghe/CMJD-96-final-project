package com.ecommercewebsite.backend.dto;

import com.ecommercewebsite.backend.entity.Address;
import com.ecommercewebsite.backend.entity.Name;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {
    private String id;
    private Name name;
    private String dataOfBirth;
    private Address address;
    private String email;
    private String username;
    private String password;

//    public UserDto(String id, Name lastName, String dataOfBirth, Address address, String email, String username, String password) {
//        this.id = id;
//        this.name = name;
//        this.dataOfBirth = dataOfBirth;
//        this.address = address;
//        this.email = email;
//        this.username = username;
//        this.password = password;
//    }


}

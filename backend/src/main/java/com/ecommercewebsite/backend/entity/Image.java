package com.ecommercewebsite.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String type;
    @Column(length = 500000)
    private byte[] imageBytes;

    public Image(String name, String type, byte[] imageBytes) {
        this.name = name;
        this.type = type;
        this.imageBytes = imageBytes;
    }
}

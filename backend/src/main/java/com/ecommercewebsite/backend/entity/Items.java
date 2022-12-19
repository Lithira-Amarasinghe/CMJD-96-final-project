package com.ecommercewebsite.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Items {

    @Id
    private String id;
    private String name;
    private String description;
    private String mainCategory;
    private String subCategory;
    private float price;
    private int qty;
}
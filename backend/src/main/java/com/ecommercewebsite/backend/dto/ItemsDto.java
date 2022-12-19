package com.ecommercewebsite.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemsDto {
    private String id;
    private String name;
    private String description;
    private String mainCategory;
    private String subCategory;
    private float price;
    private int qty;
}

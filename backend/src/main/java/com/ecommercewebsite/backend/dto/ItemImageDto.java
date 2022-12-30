package com.ecommercewebsite.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ItemImageDto {
    private String id;
    private String name;
    private String description;
    private String mainCategory;
    private String subCategory;
    private float price;
    private int qty;
    private MultipartFile imageFile;
}

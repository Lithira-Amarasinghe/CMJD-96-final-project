package com.ecommercewebsite.backend.dto;


import com.ecommercewebsite.backend.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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
    private List<Image> imageFiles;
}

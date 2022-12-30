package com.ecommercewebsite.backend.util;


import com.ecommercewebsite.backend.dto.ItemsDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StandardResponse {
    private int code;
    private String message;
    private Object object;

//    public StandardResponse(int code, String message, String object, HttpStatus created) {
//
//    }
}

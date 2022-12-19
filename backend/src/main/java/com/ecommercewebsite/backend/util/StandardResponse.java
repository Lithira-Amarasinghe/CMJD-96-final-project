package com.ecommercewebsite.backend.util;


import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Data
public class StandardResponse {
    private int code;
    private String message;
    private Object object;


    public StandardResponse(int code, String message, String object, HttpStatus created) {
    }
}

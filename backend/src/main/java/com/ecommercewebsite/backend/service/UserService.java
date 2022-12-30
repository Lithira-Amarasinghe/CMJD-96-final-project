package com.ecommercewebsite.backend.service;

import com.ecommercewebsite.backend.dto.UserDto;
import com.ecommercewebsite.backend.entity.User;

public interface UserService {
    String saveUser(UserDto userDto);

    User getUserByUsername(String username);
}

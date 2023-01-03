package com.ecommercewebsite.backend.service.impl;

import com.ecommercewebsite.backend.dto.UserDto;
import com.ecommercewebsite.backend.entity.User;
import com.ecommercewebsite.backend.repo.UserRepo;
import com.ecommercewebsite.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public String saveUser(UserDto userDto) {
        return userRepo.save(
                new User(
                        userDto.getId(),
                        userDto.getName(),
                        userDto.getDataOfBirth(),
                        userDto.getAddress(),
                        userDto.getEmail(),
                        userDto.getUsername(),
                        userDto.getPassword()
                )
        ).getName().toString();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepo.getUserByUsername(username);
    }
}
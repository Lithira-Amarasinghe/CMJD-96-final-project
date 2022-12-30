package com.ecommercewebsite.backend.api;

import com.ecommercewebsite.backend.dto.UserDto;
import com.ecommercewebsite.backend.entity.User;
import com.ecommercewebsite.backend.service.UserService;
import com.ecommercewebsite.backend.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<StandardResponse> saveUser(@RequestBody UserDto userDto) {
        return new ResponseEntity<>(
                new StandardResponse(200, "Saved", userService.saveUser(userDto)
                ), HttpStatus.OK
        );
    }

    @GetMapping("/{username}")
    public ResponseEntity<StandardResponse> getUserByUsername(@PathVariable String username){
        return new ResponseEntity<>(new StandardResponse(200, "Found",
        userService.getUserByUsername(username)
        ),HttpStatus.FOUND);
    }
}

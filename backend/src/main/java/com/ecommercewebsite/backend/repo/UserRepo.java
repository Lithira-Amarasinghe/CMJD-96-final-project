package com.ecommercewebsite.backend.repo;

import com.ecommercewebsite.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface UserRepo extends JpaRepository<User, String> {

    @Query(value = "SELECT * FROM User WHERE username LIKE ?1 OR email LIKE ?1", nativeQuery = true)
    User getUserByUsername(String username);
}

package com.ecommercewebsite.backend.repo;

import com.ecommercewebsite.backend.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface ShoppingCartRepo extends JpaRepository<ShoppingCart, Integer> {


}
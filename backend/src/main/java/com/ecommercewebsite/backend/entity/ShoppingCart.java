package com.ecommercewebsite.backend.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int noOfItems;
    @Column(name = "total_cost")
    private int totalPrice;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @OneToMany(mappedBy = "shopping_cart")
    private List<ShoppingCartItem> shoppingCartItem;
}

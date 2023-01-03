package com.ecommercewebsite.backend.entity;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;


@Entity
public class ShoppingCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String quantity;
    private float total_price;

//    @Temporal(TemporalType.DATE)
    private Date date;
//
//    @Basic
//    @Temporal(TemporalType.TIME)
    private Time time;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id", referencedColumnName = "id")
    private Items items;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shopping_cart_id", referencedColumnName = "id")
    private ShoppingCart shopping_cart;
}

package com.ecommercewebsite.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
public class Orders {
    @Id
    @Column(name = "order_id")
    private int id;
    private int noOfItems;
    private float totalPrice;

    public Orders(int id, int noOfItems, float totalPrice) {
        this.id = id;
        this.noOfItems = noOfItems;
        this.totalPrice = totalPrice;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id", referencedColumnName = "payment_id")
    private Payment payment;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shipping_id", referencedColumnName = "shipping_details_id")
    private ShippingDetails shippingDetails;
}

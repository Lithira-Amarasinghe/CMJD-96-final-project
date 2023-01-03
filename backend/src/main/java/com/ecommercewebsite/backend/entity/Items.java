package com.ecommercewebsite.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@AllArgsConstructor()
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Items")
public class Items {

    @Id
    private String id;
    private String name;
    private String description;
    private String mainCategory;

    public Items(String id, String name, String description, String mainCategory, String subCategory, float price, int qty) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.mainCategory = mainCategory;
        this.subCategory = subCategory;
        this.price = price;
        this.qty = qty;
    }

    private String subCategory;
    private float price;
    private int qty;


    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id", referencedColumnName = "id")
    private List<Image> image;

    @OneToMany(mappedBy = "items")
    private List<ShoppingCartItem> shoppingCartItem;


}
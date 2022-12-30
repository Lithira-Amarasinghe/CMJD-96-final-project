package com.ecommercewebsite.backend.dto;

import com.ecommercewebsite.backend.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "total_cost")
    private float totalCost;

    public Orders(int id, float totalCost) {
        this.id = id;
        this.totalCost = totalCost;
    }

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;


}

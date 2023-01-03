package com.ecommercewebsite.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@NoArgsConstructor
@Data
@Entity
public class Payment {
    @Id
    @Column(name = "payment_id")
    private int id;
    private String status;
    private Time time;

    public Payment(int id, String status, Time time, Date data, float amount, String referrence) {
        this.id = id;
        this.status = status;
        this.time = time;
        this.data = data;
        this.amount = amount;
        this.referrence = referrence;
    }

    private Date data;
    private float amount;
    private String referrence;

    @OneToOne(mappedBy = "payment")
    private Orders orders;
}

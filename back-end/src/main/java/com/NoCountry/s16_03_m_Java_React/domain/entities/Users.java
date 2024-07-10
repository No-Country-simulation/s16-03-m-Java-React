package com.NoCountry.s16_03_m_Java_React.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue( strategy = GenerationType.UUID)
    private String id;
    @Column(unique = true)
    private String email;
    private String userName;
    private String name;
    private String lastName;
    private Long phoneNumber;
    private String password;
    private Long creditCard;
}

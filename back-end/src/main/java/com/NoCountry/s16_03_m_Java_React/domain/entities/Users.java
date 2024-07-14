package com.NoCountry.s16_03_m_Java_React.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users{

    @Id
    @GeneratedValue( strategy = GenerationType.UUID)
    private String id;
    @Column(unique = true)
    private String email;
    private String name;
    private String lastName;
    private Long phoneNumber;
    private String password;
    private String userName;

    private Boolean active;
    
}

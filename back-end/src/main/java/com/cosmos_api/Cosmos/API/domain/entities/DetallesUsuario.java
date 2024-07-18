package com.cosmos_api.Cosmos.API.domain.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class DetallesUsuario {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    private String lastName;
    private Long phoneNumber;
    private String userName;
    private Boolean active;
}

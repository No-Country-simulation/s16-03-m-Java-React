package com.NoCountry.s16_03_m_Java_React.application.dto.login;

public record ResponseLogin(
        String jwt,
        String id,
        String userName,
        String name,
        String lastName
){
}

package com.NoCountry.s16_03_m_Java_React.application.dto.users;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CreateDtoUser(
        @Email
        @NotNull(message = "El Email no puede ser nulo")
        String email,
        @NotNull(message = "El Password no puede ser nulo")
        @Size(min = 7, message = "El Password debe tener al menos 8 caracteres")
        String password,
        @NotNull(message = "El nombre no puede ser nulo")
        String name,
        @NotNull(message = "El apellido no puede ser nulo")
        String lastName,
        @NotNull(message = "El numero de telefono no puede ser nulo")
        Long phoneNumber,
        @NotNull(message = "El UserName no puede ser nulo")
        String userName
) {
}

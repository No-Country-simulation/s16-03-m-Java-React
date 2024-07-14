package com.NoCountry.s16_03_m_Java_React.domain.services;

import com.NoCountry.s16_03_m_Java_React.application.dto.users.CreateDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.dto.users.ReadDtoUser;
import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;

public interface UsersService {

Users createUser(CreateDtoUser createDtoUser);
ReadDtoUser readUserById(String id);
ReadDtoUser readUserByEmail(String email);
}

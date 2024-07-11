package com.NoCountry.s16_03_m_Java_React.application.mapper;

import com.NoCountry.s16_03_m_Java_React.application.dto.users.CreateDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.dto.users.ReadDtoUser;
import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UsersMapper {

    Users createDtoToUser (CreateDtoUser createDtoUser);
    ReadDtoUser userToReadDto (Users user);
}

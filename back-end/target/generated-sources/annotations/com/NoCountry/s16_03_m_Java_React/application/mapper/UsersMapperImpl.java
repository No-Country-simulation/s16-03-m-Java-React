package com.NoCountry.s16_03_m_Java_React.application.mapper;

import com.NoCountry.s16_03_m_Java_React.application.dto.users.CreateDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.dto.users.ReadDtoUser;
import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-07-11T11:18:15-0300",
    comments = "version: 1.5.0.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class UsersMapperImpl implements UsersMapper {

    @Override
    public Users createDtoToUser(CreateDtoUser createDtoUser) {
        if ( createDtoUser == null ) {
            return null;
        }

        Users users = new Users();
        users.setEmail(createDtoUser.email());
        users.setPassword(createDtoUser.password());
        users.setName(createDtoUser.name());
        users.setLastName(createDtoUser.lastName());
        users.setUserName(createDtoUser.userName());
        users.setPhoneNumber(createDtoUser.phoneNumber());

        return users;
    }

    @Override
    public ReadDtoUser userToReadDto(Users user) {
        if ( user == null ) {
            return null;
        }

        String id = null;
        String email = null;
        String name = null;
        String lastName = null;
        String userName = null;

        ReadDtoUser readDtoUser = new ReadDtoUser( id, email, name, lastName, userName );

        return readDtoUser;
    }
}

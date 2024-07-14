package com.NoCountry.s16_03_m_Java_React.application.mapper;

import com.NoCountry.s16_03_m_Java_React.application.dto.users.CreateDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.dto.users.ReadDtoUser;
import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-07-14T16:26:36-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.11 (Amazon.com Inc.)"
)
@Component
public class UsersMapperImpl implements UsersMapper {

    @Override
    public Users createDtoToUser(CreateDtoUser createDtoUser) {
        if ( createDtoUser == null ) {
            return null;
        }

        Users users = new Users();

        users.setEmail( createDtoUser.email() );
        users.setName( createDtoUser.name() );
        users.setLastName( createDtoUser.lastName() );
        users.setPhoneNumber( createDtoUser.phoneNumber() );
        users.setPassword( createDtoUser.password() );
        users.setUserName( createDtoUser.userName() );

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

        id = user.getId();
        email = user.getEmail();
        name = user.getName();
        lastName = user.getLastName();

        String userName = null;

        ReadDtoUser readDtoUser = new ReadDtoUser( id, email, name, lastName, userName );

        return readDtoUser;
    }
}

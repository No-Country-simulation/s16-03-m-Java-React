package com.NoCountry.s16_03_m_Java_React.application.implementations;

import com.NoCountry.s16_03_m_Java_React.application.dto.users.CreateDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.dto.users.ReadDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.mapper.UsersMapper;
import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import com.NoCountry.s16_03_m_Java_React.domain.repository.UsersRepository;
import com.NoCountry.s16_03_m_Java_React.domain.services.UsersService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsersServiceImpl implements UsersService {
    public final UsersRepository usersRepository;
    private final UsersMapper usersMapper;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public Users createUser(CreateDtoUser createDtoUser) {
        var userAlreadyExists = usersRepository.findByEmail(createDtoUser.email());
        if(userAlreadyExists.isPresent()){ throw new EntityExistsException("El email ya se encuentra en uso");}

        Users user = usersMapper.createDtoToUser(createDtoUser);

        user.setActive(true);
        user.setPassword(passwordEncoder.encode(createDtoUser.password()));

        var userAdded = usersRepository.save(user);

        return userAdded;
    }

    @Override
    public ReadDtoUser readUserById(String id) {
        Users user = usersRepository.findByIdAndActive(id, true)
                .orElseThrow(() -> new EntityNotFoundException("No se encuentra el usuario con el id " + id));

        return usersMapper.userToReadDto(user);
    }

    @Override
    public ReadDtoUser readUserByEmail(String email) {
        Users user = usersRepository.findByEmailAndActive(email, true)
                .orElseThrow(() -> new EntityNotFoundException("No se encuentra el usuario con el email " + email));

        return usersMapper.userToReadDto(user);
    }
}

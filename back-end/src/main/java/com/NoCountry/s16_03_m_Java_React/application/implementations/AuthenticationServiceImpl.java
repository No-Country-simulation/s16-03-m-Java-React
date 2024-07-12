package com.NoCountry.s16_03_m_Java_React.application.implementations;

import com.NoCountry.s16_03_m_Java_React.application.dto.login.RequestLogin;
import com.NoCountry.s16_03_m_Java_React.application.dto.login.ResponseLogin;
import com.NoCountry.s16_03_m_Java_React.domain.repository.UsersRepository;
import com.NoCountry.s16_03_m_Java_React.domain.services.AuthenticationService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UsersRepository usersRepository;
    private final AuthenticationManager authenticationManager;

    @Override
    public ResponseLogin login(RequestLogin data) {

        String token = "";
        String id = "";
        String userName = "";
        String name = "";
        String lastName = "";

        var user = usersRepository.findByEmail(data.email());
        if(user.isPresent()){
            id = user.get().getId();
            userName = user.get().getUsername();
            name = user.get().getName();
            lastName = user.get().getLastName();
        } else throw new EntityNotFoundException("No se puede encontrar el usuario con el email " + data.email());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(data.email(),
                        data.password()));

        ResponseLogin responseLogin = new ResponseLogin(token, id, userName, name, lastName);

        return responseLogin;
    }
}

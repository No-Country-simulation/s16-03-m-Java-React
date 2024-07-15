package com.NoCountry.s16_03_m_Java_React.domain.services;

import com.NoCountry.s16_03_m_Java_React.application.dto.login.RequestLogin;
import com.NoCountry.s16_03_m_Java_React.application.dto.login.ResponseLogin;
import com.NoCountry.s16_03_m_Java_React.domain.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class AuthenticationService implements UserDetailsService {
    @Autowired
    UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var userMail = usersRepository.findByEmail(username);
        if (userMail != null) {
            return userMail;
        }
        throw new UsernameNotFoundException("Usuario No encontrado");
    }
}

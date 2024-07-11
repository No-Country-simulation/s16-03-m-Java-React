package com.NoCountry.s16_03_m_Java_React.domain.services;

import com.NoCountry.s16_03_m_Java_React.application.dto.login.RequestLogin;
import com.NoCountry.s16_03_m_Java_React.application.dto.login.ResponseLogin;

public interface AuthenticationService {

    ResponseLogin login(RequestLogin data);
}

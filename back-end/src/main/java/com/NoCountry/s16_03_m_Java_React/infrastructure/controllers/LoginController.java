package com.NoCountry.s16_03_m_Java_React.infrastructure.controllers;

import com.NoCountry.s16_03_m_Java_React.application.dto.login.RequestLogin;
import com.NoCountry.s16_03_m_Java_React.application.dto.login.ResponseLogin;
import com.NoCountry.s16_03_m_Java_React.domain.services.AuthenticationService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class LoginController {

    private final AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<ResponseLogin> login(
            @RequestBody @Valid @NotNull RequestLogin requestLogin){

        return ResponseEntity.ok(this.authenticationService.login(requestLogin));
    }
}

package com.NoCountry.s16_03_m_Java_React.infrastructure.controllers;

import com.NoCountry.s16_03_m_Java_React.application.dto.login.RequestLogin;
import com.NoCountry.s16_03_m_Java_React.application.dto.login.ResponseLogin;
import com.NoCountry.s16_03_m_Java_React.application.security.DtoJWTToken;
import com.NoCountry.s16_03_m_Java_React.application.security.TokenService;
import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import com.NoCountry.s16_03_m_Java_React.domain.services.AuthenticationService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class LoginController {

//    private final AuthenticationService authenticationService;
    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    @PostMapping
    public ResponseEntity login(
            @RequestBody @Valid @NotNull RequestLogin requestLogin){
        if (requestLogin.email() == null || requestLogin.email().isEmpty()) {
            return ResponseEntity.badRequest().body("El email.no debe estar vacío");
        }
        if (requestLogin.password() == null || requestLogin.password().isEmpty()) {
            return ResponseEntity.badRequest().body("El password no debe estar vacío");
        }

        try {
            Authentication authToken = new UsernamePasswordAuthenticationToken(requestLogin.email(),
                    requestLogin.password());
            System.out.println("autenticación: " + authToken);

            var authUser = authenticationManager.authenticate(authToken);
            var JWTtoken = tokenService.generarToken((Users) authUser.getPrincipal());
            return ResponseEntity.ok(new DtoJWTToken(JWTtoken));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña Inválida");
        }


    }
}

package com.cosmos_api.Cosmos.API.infraestructure.controllers;

import com.cosmos_api.Cosmos.API.domain.entities.Usuario;
import com.cosmos_api.Cosmos.API.aplication.dto.login.DatosAutenticacionUsuario;
import com.cosmos_api.Cosmos.API.aplication.dto.token.DatosJWTToken;
import com.cosmos_api.Cosmos.API.domain.services.TokenService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    @Operation(summary = "Inicio de cesión del usuario ")
    public ResponseEntity autenticarUsuario(@RequestBody @Valid DatosAutenticacionUsuario datosAutenticacionUsuario) {
        if (datosAutenticacionUsuario.email() == null || datosAutenticacionUsuario.email().isEmpty()) {
            return ResponseEntity.badRequest().body("El campo email no debe estar vacío");
        }
        if (datosAutenticacionUsuario.password() == null || datosAutenticacionUsuario.password().isEmpty()) {
            return ResponseEntity.badRequest().body("El campos password no debe estar vacío");
        }
        try {
            Authentication authToken = new UsernamePasswordAuthenticationToken(datosAutenticacionUsuario.email(),
                    datosAutenticacionUsuario.password());
            var usuarioAutenticado = authenticationManager.authenticate(authToken);
            var JWTtoken = tokenService.generarToken((Usuario) usuarioAutenticado.getPrincipal());
            return ResponseEntity.ok(new DatosJWTToken(JWTtoken));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña invalida");
        }
    }
}

package com.NoCountry.s16_03_m_Java_React.application.security;

import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class TokenService {

    @Value("${api.security.secret")
    private String apiSecret;

    public String generarToken(Users users) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            var token = JWT.create()
                    .withIssuer("Cosmos API")
                    .withSubject(users.getUsername())
                    .withClaim("id", users.getId())
                    .withExpiresAt(generarFechaExpiracion())
                    .sign(algorithm);
            return token;
        } catch (JWTCreationException exception) { // modificar para devolver un mensaje mediante Json
            throw new RuntimeException();
        }
    }

    public String getSubject(String token) {
        if (token == null) {
            throw new RuntimeException(); // modificar para mostrar un mensaje Json
        }
        DecodedJWT verifier = null;
        Algorithm algorithm = Algorithm.HMAC256(apiSecret);
        verifier = JWT.require(algorithm)
                .withIssuer("Cosmos API")
                .build()
                .verify(token);
        var verifiado = verifier.getSubject();
        System.out.println("Verifiado: " + verifiado);

        if (verifier == null) {
            throw new TokenExpiredException("Verificaion Inválida", null);
        }
        return verifier.getSubject();

    }

    private Instant generarFechaExpiracion() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}

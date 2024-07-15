package com.NoCountry.s16_03_m_Java_React.application.security;

import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
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
        // Nueva version usando jjwt

        try {
            SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
            byte[] apiKeySecretBytes = apiSecret.getBytes();

            Instant expiracion = generarFechaExpiracion();
            Date fechaExpiracion = Date.from(expiracion);

            var token = Jwts.builder()
                    .setIssuer("Cosmos API")
                    .setSubject(users.getEmail())
                    .claim("id", users.getId())
                    .setExpiration(fechaExpiracion)
                    .signWith(signatureAlgorithm, apiKeySecretBytes);
            return token.toString();
        } catch (JwtException e) {
            throw new RuntimeException(e.getMessage());
        }

        // Version anterior usando auth0
//        try {
//            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
//            var token = JWT.create()
//                    .withIssuer("Cosmos API")
//                    .withSubject(users.getUsername())
//                    .withClaim("id", users.getId())
//                    .withExpiresAt(generarFechaExpiracion())
//                    .sign(algorithm);
//            return token;
//        } catch (JWTCreationException exception) { // modificar para devolver un mensaje mediante Json
//            throw new RuntimeException();
//        }
    }

    public String getSubject(String token) {
        // Nueva versión utilizando jjwt
        if (token == null || token.isEmpty()) {
            throw new IllegalArgumentException("Token vacío");
        }

        try {
            SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
            byte[] apiKeySecretBytes = apiSecret.getBytes();

            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(apiKeySecretBytes)
                    .build()
                    .parseClaimsJws(token).getBody();

            return claims.getSubject();
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }


        // Versión anterior utilizando auth0
//        if (token == null) {
//            throw new RuntimeException(); // modificar para mostrar un mensaje Json
//        }
//        DecodedJWT verifier = null;
//        Algorithm algorithm = Algorithm.HMAC256(apiSecret);
//        verifier = JWT.require(algorithm)
//                .withIssuer("Cosmos API")
//                .build()
//                .verify(token);
//        var verifiado = verifier.getSubject();
//        System.out.println("Verifiado: " + verifiado);
//
//        if (verifier == null) {
//            throw new TokenExpiredException("Verificaion Inválida", null);
//        }
//        return verifier.getSubject();

    }

    private Instant generarFechaExpiracion() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}

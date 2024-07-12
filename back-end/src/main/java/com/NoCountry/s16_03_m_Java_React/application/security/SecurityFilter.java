package com.NoCountry.s16_03_m_Java_React.application.security;

import com.NoCountry.s16_03_m_Java_React.domain.repository.UsersRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
@Component
public class SecurityFilter extends OncePerRequestFilter {
    private final UsersRepository usersRepository;
    private final TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        //Obtener token del header
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null) {
            String token =authHeader.replace("Bearer ", "");
            String userName = tokenService.getSubject(token);

            if (userName != null) {
                var users = usersRepository.findByEmail(userName);
                var authentication = new UsernamePasswordAuthenticationToken(users,
                        null,
                        users.get().getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(request, response);
    }
}

package com.cosmos_api.Cosmos.API.domain.services;

import com.cosmos_api.Cosmos.API.aplication.dto.usuario.DatosRegistroUsuario;
import com.cosmos_api.Cosmos.API.domain.entities.Usuario;
import com.cosmos_api.Cosmos.API.domain.repository.UsuarioRepository;
import com.cosmos_api.Cosmos.API.infraestructure.errores.excepciones.EmailAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    
    public Usuario registrarUsuario (DatosRegistroUsuario datosRegistroUsuario) {
        if (usuarioRepository.findByEmail(datosRegistroUsuario.email()) != null) {
            throw new EmailAlreadyExistsException("El correo electrónico ya está en uso");
        }

        Usuario usuario = new Usuario(
                null,
                datosRegistroUsuario.email(),
                datosRegistroUsuario.password());
        String passwordEncoded = passwordEncoder.encode(datosRegistroUsuario.password());
        usuario.setPassword(passwordEncoded);
        return usuarioRepository.save(usuario);
    }
}

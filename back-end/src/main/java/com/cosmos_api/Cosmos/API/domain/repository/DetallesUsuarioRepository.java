package com.cosmos_api.Cosmos.API.domain.repository;

import com.cosmos_api.Cosmos.API.domain.entities.DetallesUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DetallesUsuarioRepository extends JpaRepository<DetallesUsuario, Long> {
    @Query("""
            SELECT d FROM DetallesUsuario d
            WHERE usuarioId = :id
            """)
    DetallesUsuario buscarUsuario(Long id);
}

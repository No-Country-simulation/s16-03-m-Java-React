package com.NoCountry.s16_03_m_Java_React.domain.repository;

import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

    Optional<Users> findByEmailAndActive(String email, Boolean active);
    Optional<Users> findByIdAndActive(String id, Boolean active);
    Users findByEmail(String email);

}

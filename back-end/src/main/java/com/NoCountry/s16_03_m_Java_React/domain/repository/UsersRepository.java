package com.NoCountry.s16_03_m_Java_React.domain.repository;

import com.NoCountry.s16_03_m_Java_React.domain.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, String> {

}

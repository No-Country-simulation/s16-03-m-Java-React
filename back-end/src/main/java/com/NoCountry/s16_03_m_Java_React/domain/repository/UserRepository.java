package com.NoCountry.s16_03_m_Java_React.domain.repository;

import com.NoCountry.s16_03_m_Java_React.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}

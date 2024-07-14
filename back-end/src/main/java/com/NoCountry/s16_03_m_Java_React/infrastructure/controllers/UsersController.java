package com.NoCountry.s16_03_m_Java_React.infrastructure.controllers;

import com.NoCountry.s16_03_m_Java_React.application.dto.users.CreateDtoUser;
import com.NoCountry.s16_03_m_Java_React.application.dto.users.ReadDtoUser;
import com.NoCountry.s16_03_m_Java_React.domain.services.UsersService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/user")
@RestController
@RequiredArgsConstructor
public class UsersController {

    public final UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<ReadDtoUser> registerUser(@RequestBody @Valid @NotNull CreateDtoUser createUser){

        return ResponseEntity.status(HttpStatus.CREATED).body(
                this.usersService.createUser(createUser));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReadDtoUser> findUserById(@PathVariable String id){

        return ResponseEntity.ok(usersService.readUserById(id));
    }
    @GetMapping("/email/{email}")
    public ResponseEntity<ReadDtoUser> findUserByEmail(@PathVariable String email){

        return ResponseEntity.ok(usersService.readUserByEmail(email));
    }
}

package com.cosmos_api.Cosmos.API.aplication.dto;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Validated
public class dtoProducts {

    @NotBlank
    @Size(min = 2, max = 20)
    private String title;

    @NotBlank
    @Size(min = 2, max = 255)
    private String description;

    @NotNull
    @Digits(integer = 10, fraction = 2)
    @PositiveOrZero
    private double cost;

}

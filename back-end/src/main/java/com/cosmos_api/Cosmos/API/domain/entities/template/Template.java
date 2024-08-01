package com.cosmos_api.Cosmos.API.domain.entities.template;

import com.cosmos_api.Cosmos.API.domain.entities.user.Usuario;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "templates")
@Entity(name = "Template")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Template {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(name = "image", length = 1398368, columnDefinition = "VARCHAR(1398368)")
    private String image;

    private String slug;

    @Column(name = "variant")
    @Enumerated(EnumType.STRING)
    private Variants variant;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    @JsonBackReference
    private Usuario usuario;

}

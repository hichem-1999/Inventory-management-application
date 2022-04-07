package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@Entity//tab
@Table(name = "PRODUIT")
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut
@Getter
@Setter
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "ID_SEQ")
    private Long id;

    private String libPrd;
    private String descriptionPrd;
    private Double prixPrd;
    private String soldePrd;
    private Double quantiteDispoPrd;

    private String nouveautePrd;


    @JsonProperty("dateAjout")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateAjout;



    @ManyToOne
    @JoinColumn(name = "idCategorie", nullable = true)
    private Categorie categorie;

    @ManyToOne
    @JoinColumn(name = "idMarque", nullable = true)
    private Marque marque;




}

package com.example.demo.model;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity//tab
@Table(name="CATEGORIE")
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut
public class Categorie {

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "ID_SEQ")
    private Long id;

    private  String libCategorie;


    @JsonIgnore
    @OneToMany (mappedBy = "categorie")
    private List<Produit> produits;
}

package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;
import java.util.List;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name="COMMANDE")
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut
public abstract class Commande {

    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "ID_SEQ")
    protected Long id;

    @JsonFormat(pattern="yyyy-MM-dd")
    protected Date dateCmd;


    protected Integer delaiLivrCmd;
    protected String lieuLiverCmd;
    protected String modeLiver;
    protected Double prixTotLiver;
    protected String modePaiement;



    @ManyToMany
    @JoinTable(
            name = "commande_ligne",
            joinColumns = @JoinColumn(name = "idCmd"),
            inverseJoinColumns = @JoinColumn(name = "idPrd"))
    private List<Produit> produits;
}

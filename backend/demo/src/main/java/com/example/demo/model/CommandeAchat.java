package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.List;

@Entity//tab
@Table(name="COMMANDEACHAT")
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut

public class CommandeAchat extends Commande{

    private Double montantCmd;

    @ManyToOne
    private Fournisseur fournisseur;

    private String product;
    private Long qteAchete;


}

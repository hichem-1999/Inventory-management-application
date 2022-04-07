package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity//tab
@Table(name="FOURNISSEUR")
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut
public class Fournisseur extends Utilisateur{
    private String nomUser;

    @JsonIgnore
    @OneToMany (mappedBy = "fournisseur")
    private List<CommandeAchat> commandeAchat;




}

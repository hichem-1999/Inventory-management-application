package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity//tab
@Table(name="CLIENT")
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut
public class Client extends Utilisateur {


    private String nomUser;
    private String prenomUser;
    private String genreUser;
    private String statusUser;


    @JsonIgnore
    @OneToMany (mappedBy = "client")
    private List<CommandeVente> commandeVentes;
}

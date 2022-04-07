package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;
import java.util.List;

@MappedSuperclass

//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Data//set w get
@AllArgsConstructor//consrtuctor avec les attributs
@NoArgsConstructor//constructor sans attribut
public abstract class Utilisateur {
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "ID_SEQ")
    protected Long id;

    protected String adresseUser;
    protected String telUser;
    protected String emailUser;
    protected String paysUser;
    protected String villeUser;
    protected String codePostalUser;

    @JsonProperty("dateNaissanceUser")
    @JsonFormat(pattern="yyyy-MM-dd")
    protected Date dateNaissanceUser;



}



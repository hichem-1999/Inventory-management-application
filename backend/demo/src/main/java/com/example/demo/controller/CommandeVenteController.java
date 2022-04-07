package com.example.demo.controller;

import com.example.demo.model.CommandeVente;
import com.example.demo.service.CommandeVenteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/commandeVente")
@AllArgsConstructor

public class CommandeVenteController {
    private final CommandeVenteService commandeVenteService;

    @GetMapping(value = "/all")
    public List<CommandeVente> getAllCommandeVente() {
        return commandeVenteService.getAllCommandeVente();
    }


    @PostMapping("/add")
    public ResponseEntity<CommandeVente> addCommandeVente(@RequestBody CommandeVente commandeVente) {
        CommandeVente newCommandeVente = commandeVenteService.addCommandeVente(commandeVente);
        return new ResponseEntity<>(newCommandeVente, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        commandeVenteService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<CommandeVente> updateCommandeVente(@RequestBody CommandeVente commandeVente) {
        CommandeVente updateCommandeVente = commandeVenteService.updateCommandeVente(commandeVente);
        return new ResponseEntity<>(updateCommandeVente, HttpStatus.OK);
    }
}



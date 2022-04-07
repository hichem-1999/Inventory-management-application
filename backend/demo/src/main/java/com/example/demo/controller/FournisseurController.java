package com.example.demo.controller;

import com.example.demo.model.Fournisseur;
import com.example.demo.service.FournisseurService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/fournisseur")
@AllArgsConstructor
public class FournisseurController {
    private final FournisseurService fournisseurService;

    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Fournisseur> getAllFournisseur() {
        return fournisseurService.getAllFournisseur();
    }

    @PostMapping("/add")
    public ResponseEntity<Fournisseur> addFournisseur(@RequestBody Fournisseur fournisseur) {
        Fournisseur newFournisseur = fournisseurService.addFournisseur(fournisseur);
        return new ResponseEntity<>(newFournisseur, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        fournisseurService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Fournisseur> updateFournisseur(@RequestBody Fournisseur fournisseur) {
        Fournisseur updateFournisseur = fournisseurService.updateFournisseur(fournisseur);
        return new ResponseEntity<>(updateFournisseur, HttpStatus.OK);
    }
}

package com.example.demo.controller;

import com.example.demo.model.Categorie;
import com.example.demo.service.CategorieService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/categorie")
@AllArgsConstructor
public class CategorieController {

    private final CategorieService categorieService;

    @GetMapping(value = "/all")
    public List<Categorie> getAllCategorie() {
        return categorieService.getAllCategorie();
    }


    @PostMapping("/add")
    public ResponseEntity<Categorie> addCategorie(@RequestBody Categorie categorie) {
        Categorie newCategorie = categorieService.addCategorie(categorie);
        return new ResponseEntity<>(newCategorie, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        categorieService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<Categorie> updateCategorie(@RequestBody Categorie categorie) {
        Categorie updateCategorie = categorieService.updateCategorie(categorie);
        return new ResponseEntity<>(updateCategorie, HttpStatus.OK);
    }


}

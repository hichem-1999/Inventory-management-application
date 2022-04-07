package com.example.demo.controller;

import com.example.demo.model.Categorie;
import com.example.demo.model.Produit;
import com.example.demo.service.ProduitService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/produit")
@AllArgsConstructor
public class ProduitController {
    private final ProduitService produitService;

    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Produit> getAllProduit() {
        return produitService.getAllProduit();
    }

    @RequestMapping(
            value = "/mostExp",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Produit getTheMostExpensive() {
        return produitService.getTheMostExpensive();
    }

    @RequestMapping(
            value = "/mostChep",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Produit getTheMostChepar() {
        return produitService.getTheMostChepar();
    }

//    @RequestMapping(
//            value = "/bestSel",
//            method = RequestMethod.GET,
//            produces = MediaType.APPLICATION_JSON_VALUE)
//    public Produit getTheBestSeller() {
//        return produitService.getTheBestSeller();
//    }

    @RequestMapping(
            value = "/byCateg/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Produit> getAllProduitByCateg(@PathVariable("id") Long id) {
        return produitService.getAllProduitByCateg(Long.parseLong(id.toString()));
    }
    @RequestMapping(
            value = "/byMarque/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Produit> getAllProduitByMarque(@PathVariable("id") Long id) {
        return produitService.getAllProduitByMarque(Long.parseLong(id.toString()));
    }

    @RequestMapping(
            value = "/byQteAchete/{lib}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Long getQteAchete(@PathVariable("lib") String lib) {
        return produitService.getQteAcheteByProduct(lib);
    }

    @RequestMapping(
            value = "/byPrixPrd/{prixPrd}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Produit> getAllProduitByPrixPrd(@PathVariable("prixPrd") Double prixPrd) { return produitService.getAllProduitByPrixPrd(prixPrd);
    }

    @PostMapping("/add")
    public ResponseEntity<Produit> addProduit(@RequestBody Produit produit) {
        Produit newProduit = produitService.addProduit(produit);
        return new ResponseEntity<>(newProduit, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        produitService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Produit> updateProduit(@RequestBody Produit produit) {
        Produit updateProduit = produitService.updateProduit(produit);
        return new ResponseEntity<>(updateProduit, HttpStatus.OK);
    }
}

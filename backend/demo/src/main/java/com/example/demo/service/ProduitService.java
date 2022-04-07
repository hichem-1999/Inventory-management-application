package com.example.demo.service;

import com.example.demo.model.Categorie;
import com.example.demo.model.Produit;
import com.example.demo.repo.CommandeAchatRepo;
import com.example.demo.repo.ProduitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProduitService {

    private final ProduitRepo produitRepo;
    private final CommandeAchatRepo commandeAchatRepo;


    @Autowired
    public ProduitService(ProduitRepo produitRepo, CommandeAchatRepo commandeAchatRepo) {
        this.produitRepo = produitRepo;
        this.commandeAchatRepo = commandeAchatRepo;
    }

    public Produit addProduit(Produit produit) {


        return produitRepo.save(produit);
    }

    public List<Produit> getAllProduit() {

        return produitRepo.findAll();
    }

    public List<Produit> getAllProduitByCateg(Long id) {

        return produitRepo.findAllByCategorie_Id(id);
    }
    public List<Produit> getAllProduitByMarque(Long id) {

        return produitRepo.findAllByMarque_Id(id);
    }

    public Long getQteAcheteByProduct(String libProduct) {
        return commandeAchatRepo.findQteAcheteByProduct(libProduct);
    }

    public Produit getTheMostExpensive() {

        return produitRepo.findTheMostExpensive();
    }
    public Produit getTheMostChepar() {

        return produitRepo.findTheMostChepar();
    }
//    public Produit getTheBestSeller() {
//
//        return produitRepo.findTheBestSeller();
//    }

    public List<Produit> getAllProduitByPrixPrd(Double prixPrd) {

        return produitRepo.findAllByPrixPrdGreaterThan(prixPrd);
    }

    public Produit updateProduit(Produit produit) {

        return produitRepo.save(produit);
    }

    public void deleteById(Long id) {
        produitRepo.deleteById((id));
    }

}

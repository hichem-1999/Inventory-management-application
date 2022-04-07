package com.example.demo.service;

import com.example.demo.model.Fournisseur;
import com.example.demo.repo.FournisseurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class FournisseurService {
    private final FournisseurRepo fournisseurRepo;


    @Autowired
    public FournisseurService(FournisseurRepo fournisseurRepo) {
        this.fournisseurRepo = fournisseurRepo;
    }

    public Fournisseur addFournisseur(Fournisseur fournisseur) {

        return fournisseurRepo.save(fournisseur);
    }

    public List<Fournisseur> getAllFournisseur() {
        return fournisseurRepo.findAll();
    }

    public Fournisseur updateFournisseur(Fournisseur fournisseur) {
        return fournisseurRepo.save(fournisseur);
    }

    public void deleteById(Long id) {
        fournisseurRepo.deleteById((id));
    }

}

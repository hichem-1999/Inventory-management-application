package com.example.demo.service;

import com.example.demo.model.Categorie;
import com.example.demo.repo.CategorieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class CategorieService {

    private final CategorieRepo categorieRepo;

    @Autowired
    public CategorieService(CategorieRepo categorieRepo) {
        this.categorieRepo = categorieRepo;
    }

    public Categorie addCategorie(Categorie categorie) {

        return categorieRepo.save(categorie);
    }

    public List<Categorie> getAllCategorie() {
        return categorieRepo.findAll();
    }

    public Categorie updateCategorie(Categorie categorie) {
        return categorieRepo.save(categorie);
    }

    public void deleteById(Long id) {
        categorieRepo.deleteById((id));
    }

}

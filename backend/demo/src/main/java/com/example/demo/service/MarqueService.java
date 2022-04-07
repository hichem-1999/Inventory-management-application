package com.example.demo.service;

import com.example.demo.model.Marque;
import com.example.demo.repo.MarqueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MarqueService {
    private final MarqueRepo marqueRepo;


    @Autowired
    public MarqueService(MarqueRepo marqueRepo) {
        this.marqueRepo = marqueRepo;
    }

    public Marque addMarque(Marque marque) {
        return marqueRepo.save(marque);
    }

    public List<Marque> getAllMarque() {
        return marqueRepo.findAll();
    }

    public Marque updateMarque(Marque marque) {
        return marqueRepo.save(marque);
    }

    public void deleteById(Long id) {
        marqueRepo.deleteById((id));
    }

}

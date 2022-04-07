package com.example.demo.service;

import com.example.demo.model.CommandeVente;
import com.example.demo.repo.CommandeVenteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CommandeVenteService {
    private final CommandeVenteRepo commandeVenteRepo;

    @Autowired
    public CommandeVenteService(CommandeVenteRepo commandeVenteRepo) {
        this.commandeVenteRepo = commandeVenteRepo;
    }

    public CommandeVente addCommandeVente(CommandeVente commandeVente) {
        commandeVente.setProduits(commandeVente.getProduits());
        return commandeVenteRepo.save(commandeVente);
    }

    public List<CommandeVente> getAllCommandeVente() {
        return commandeVenteRepo.findAll();
    }

    public CommandeVente updateCommandeVente(CommandeVente commandeVente) {
        return commandeVenteRepo.save(commandeVente);
    }

    public void deleteById(Long id) {
        commandeVenteRepo.deleteById((id));
    }
}



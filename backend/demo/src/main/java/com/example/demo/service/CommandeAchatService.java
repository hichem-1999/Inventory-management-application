package com.example.demo.service;

import com.example.demo.model.CommandeAchat;
import com.example.demo.model.Produit;
import com.example.demo.repo.CommandeAchatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CommandeAchatService {
    private final CommandeAchatRepo commandeAchat;

    @Autowired
    public CommandeAchatService(CommandeAchatRepo commandeAchat) {
        this.commandeAchat = commandeAchat;
    }

    public CommandeAchat addCommandeAchat(CommandeAchat client) {

        return commandeAchat.save(client);
    }

    public List<CommandeAchat> getAllCommandeAchat() {
        return commandeAchat.findAll();
    }

    public CommandeAchat updateCommandeAchat(CommandeAchat client) {
        return commandeAchat.save(client);
    }

    public Double getBenefice() {

        return commandeAchat.prixVente()-commandeAchat.prixAchat();
    }

    public Double getNumberArticle() {

        return commandeAchat.qteAchat()-commandeAchat.qteVente();
    }
    public void deleteById(Long id) {
        commandeAchat.deleteById((id));
    }
}


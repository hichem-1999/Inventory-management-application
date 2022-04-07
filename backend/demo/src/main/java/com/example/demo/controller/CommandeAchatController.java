package com.example.demo.controller;

import com.example.demo.model.CommandeAchat;
import com.example.demo.model.Produit;
import com.example.demo.service.CommandeAchatService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/commandeAchat")
@AllArgsConstructor

public class CommandeAchatController {
    private final CommandeAchatService commandeAchatService;

    @RequestMapping(
            value = "/benefice",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Double getBenefice() {
        return commandeAchatService.getBenefice();
    }


    @RequestMapping(
            value = "/numberArticle",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Double getNumberArticle() {
        return commandeAchatService.getNumberArticle();
    }


    @GetMapping(value = "/all")
    public List<CommandeAchat> getAllCommandeAchat() {
        return commandeAchatService.getAllCommandeAchat();
    }


    @PostMapping("/add")
    public ResponseEntity<CommandeAchat> addCommandeAchat(@RequestBody CommandeAchat commandeAchat) {
        CommandeAchat newCommandeAchat = commandeAchatService.addCommandeAchat(commandeAchat);
        return new ResponseEntity<>(newCommandeAchat, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        commandeAchatService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<CommandeAchat> updateCommandeAchat(@RequestBody CommandeAchat commandeAchat) {
        CommandeAchat updateCommandeAchat = commandeAchatService.updateCommandeAchat(commandeAchat);
        return new ResponseEntity<>(updateCommandeAchat, HttpStatus.OK);
    }
}

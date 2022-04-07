package com.example.demo.service;

import com.example.demo.model.Client;
import com.example.demo.repo.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class ClientService {
    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    public Client addClient(Client client) {

        return clientRepo.save(client);
    }

    public List<Client> getAllClient() {
        return clientRepo.findAll();
    }

    public Client updateClient(Client client) {
        return clientRepo.save(client);
    }

    public void deleteById(Long id) {
        clientRepo.deleteById((id));
    }
}

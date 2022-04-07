package com.example.demo.repo;

import com.example.demo.model.CommandeVente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CommandeVenteRepo extends JpaRepository<CommandeVente,Long> {
}

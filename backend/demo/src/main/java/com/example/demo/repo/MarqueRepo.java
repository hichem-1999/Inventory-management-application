package com.example.demo.repo;

import com.example.demo.model.Marque;
import com.example.demo.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public interface MarqueRepo extends JpaRepository<Marque,Long> {



}

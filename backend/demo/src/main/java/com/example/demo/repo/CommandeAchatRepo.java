package com.example.demo.repo;

import com.example.demo.model.CommandeAchat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandeAchatRepo extends JpaRepository<CommandeAchat,Long> {

   @Query("SELECT c.qteAchete FROM CommandeAchat c WHERE c.product = ?1 ")
    Long findQteAcheteByProduct(String product);


   @Query("SELECT SUM(v.montantCmd)  FROM CommandeVente v ")
   Double prixVente();
    @Query("SELECT SUM(a.montantCmd)  FROM CommandeAchat a ")
    Double prixAchat();

    @Query("SELECT SUM(v.qteVendu)  FROM CommandeVente v ")
    Double qteVente();
    @Query("SELECT SUM(a.qteAchete)  FROM CommandeAchat a ")
    Double qteAchat();



}

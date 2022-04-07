package com.example.demo.repo;

import com.example.demo.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProduitRepo extends JpaRepository<Produit, Long> {



    List<Produit> findAllByCategorie_Id(Long id);

    List<Produit> findAllByMarque_Id(Long id);

    List<Produit> findAllByPrixPrdGreaterThan(Double prixPrd);

    @Query("SELECT p " +
            "FROM Produit p " +
            "WHERE p.prixPrd = (SELECT MAX(prixPrd) FROM Produit)")
    Produit findTheMostExpensive();


    @Query("SELECT p " +
            "FROM Produit p " +
            "WHERE p.prixPrd = (SELECT MIN(prixPrd) FROM Produit)")
    Produit findTheMostChepar();

//    @Query("SELECT p.libPrd, COUNT(p.libPrd) FROM Produit p GROUP BY p.libPrd HAVING COUNT (p.libPrd)=(SELECT MAX(mycount) FROM (SELECT p.libPrd, COUNT(p.libPrd) as mycount FROM Produit p GROUP BY p.libPrd))")
//    Produit findTheBestSeller();

}

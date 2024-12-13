package com.productcatalogue.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productcatalogue.api.models.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    // Recherche par catégorie
    List<Produit> findByCategorie_Id(Long categorieId);
}

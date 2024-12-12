package com.productcatalogue.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productcatalogue.api.models.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Long>{
    List<Produit> findByCategorie(String categorie);
}

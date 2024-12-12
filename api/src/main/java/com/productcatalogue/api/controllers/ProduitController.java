package com.productcatalogue.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productcatalogue.api.models.Produit;
import com.productcatalogue.api.repository.ProduitRepository;

@RestController
@RequestMapping("/produits")
public class ProduitController {
    
    @Autowired
    private ProduitRepository produitRepository;

    // Récupération de tous les produits
    @GetMapping
    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }
    
    // Ajout de produit
    @PostMapping("/ajoutProduit")
    public Produit addProduit(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    // Recupération de produit par catégorie
    @GetMapping("/{categorie}")
    public List<Produit> getProduitsByCategorie(@PathVariable String categorie) {
        return produitRepository.findByCategorie(categorie);
    }

}
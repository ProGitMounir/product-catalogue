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
import com.productcatalogue.api.services.ProduitService;

@RestController
@RequestMapping("/produits")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    // Récupération des produits
    @GetMapping
    public List<Produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    // Ajout d'un produit
    @PostMapping
    public Produit addProduit(@RequestBody Produit produit) {
        return produitService.addProduit(produit);
    }

    // Récupération des produits par catégorie
    @GetMapping("/categorie/{categorieId}")
    public List<Produit> getProduitsByCategorie(@PathVariable Long categorieId) {
        return produitService.getProduitsByCategorie(categorieId);
    }
}
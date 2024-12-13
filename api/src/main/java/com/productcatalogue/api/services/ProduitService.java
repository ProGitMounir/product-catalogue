package com.productcatalogue.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productcatalogue.api.models.Categorie;
import com.productcatalogue.api.models.Produit;
import com.productcatalogue.api.repositories.ProduitRepository;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    @Autowired
    private CategorieService categorieService;  

    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    public Produit addProduit(Produit produit) {
        // Vérifie si la catégorie existe
        Categorie categorie = categorieService.getCategorieById(produit.getCategorie().getId());
        if (categorie == null) {
            throw new RuntimeException("Catégorie non trouvée");
        }
        
        produit.setCategorie(categorie);  // Assigne la catégorie au produit
        return produitRepository.save(produit);
    }

    public List<Produit> getProduitsByCategorie(Long categorieId) {
        return produitRepository.findByCategorie_Id(categorieId);  // Filtre par catégorie
    }
}
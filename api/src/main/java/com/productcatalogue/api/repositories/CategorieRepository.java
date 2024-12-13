package com.productcatalogue.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.productcatalogue.api.models.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    // RAS
}

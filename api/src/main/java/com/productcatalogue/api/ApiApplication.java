package com.productcatalogue.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.productcatalogue.api.models.Categorie;
import com.productcatalogue.api.repositories.CategorieRepository;

@SpringBootApplication
public class ApiApplication implements CommandLineRunner{

	@Autowired
    private CategorieRepository categorieRepository;

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception {
        // Insertion de qlq catégorie
        Categorie electronique = new Categorie();
        electronique.setNom("Électronique");
        categorieRepository.save(electronique);

        Categorie vetements = new Categorie();
        vetements.setNom("Vêtements");
        categorieRepository.save(vetements);

        Categorie alimentation = new Categorie();
        alimentation.setNom("Alimentation");
        categorieRepository.save(alimentation);

        Categorie accessoires = new Categorie();
        accessoires.setNom("Accessoires");
        categorieRepository.save(accessoires);

        Categorie livres = new Categorie();
        livres.setNom("Livres");
        categorieRepository.save(livres);
	}

}

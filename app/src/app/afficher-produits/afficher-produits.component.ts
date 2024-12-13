import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-afficher-produits',
  templateUrl: './afficher-produits.component.html',
  styleUrl: './afficher-produits.component.css'
})
export class AfficherProduitsComponent implements OnInit{
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getAllProduits().subscribe(data => {
      this.produits = data;
    });
  }
}

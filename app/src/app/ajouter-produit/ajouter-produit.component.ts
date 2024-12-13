import { Component } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrl: './ajouter-produit.component.css'
})
export class AjouterProduitComponent {
  produit: Produit = new Produit(0, '', '', 0, '');

  constructor(private produitService: ProduitService) {}

  onSubmit(): void {
    this.produitService.addProduit(this.produit).subscribe(data => {
      console.log('Produit ajouté: ', data);
    });
  }
}

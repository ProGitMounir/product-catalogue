import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})

export class AddProductComponent {

  productForm: FormGroup = new FormGroup({
    reference: new FormControl(""),
    description: new FormControl(""),
    prixUnitaire: new FormControl(""),
    categorie: new FormControl("Electronics"),
  })
  
  categorieList: any [] = [];

  constructor(private http: HttpClient, private produitService : ProduitService) {
    
  }

  ngOnInit(): void {
    this.getCategorie(); 
  }

  getCategorie() {
    this.http.get("http://localhost:8080/categories").subscribe((result:any) => {
      console.log('Catégories récupérées :', result);
      this.categorieList = result;
    });
  }

  onProductSave() {
    const formValue = this.productForm.value;
    console.log('Produit créé :', formValue);
    const prodObj = {
      reference: formValue.reference,
      description: formValue.description,
      prixUnitaire: formValue.prixUnitaire,
      categorie: {
        id: formValue.categorie
      }
    }
    // Call the service to save the product
    this.produitService.addProduit(prodObj).subscribe((response) => {
        console.log('Produit créé avec succès :', response);
    });

    this.productForm.reset({
      reference: '',
      description: '',
      prixUnitaire: '',
      categorie: '',
    });
  }

}
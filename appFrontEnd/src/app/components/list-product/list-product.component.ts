import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-product',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  categorieList: any[] = [];  
  produitList: any[] = [];
  selectedCategoryId: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategorie();
    this.getProduit();
  }

  getCategorie() {
    this.http.get("http://localhost:8080/categories").subscribe((result:any) => {
      console.log('Catégories récupérés:', result);
      this.categorieList = result;
    });
  }

  getProduit(categorieId: any = null) {
    let url = "http://localhost:8080/produits";
    if(categorieId != null){
      url += `/categorie/${categorieId}`;
    }
    this.http.get(url).subscribe((result:any) => {
      console.log('Produits récupérés:', result);
      this.produitList = result;
    })
  }

  onCategoryChange() {
    console.log('Catégorie sélectionnée:', this.selectedCategoryId);
    if(this.selectedCategoryId) {
      this.getProduit(this.selectedCategoryId);
    } else {
      this.getProduit();
    }
  }

 
}

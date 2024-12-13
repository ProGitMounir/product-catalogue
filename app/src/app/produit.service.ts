import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl = 'http://localhost:8080/produits';

  constructor(private http: HttpClient) { }

  //Récupérer tous les produits
  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }

  //Ajouter un produit
  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.baseUrl}/ajoutProduit`, produit);
  }

  //Récupérer les produits par catégorie
  getProduitsByCategorie(categorie: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}/${categorie}`);
  }
}

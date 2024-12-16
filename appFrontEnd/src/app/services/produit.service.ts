import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This ensures it’s available throughout the application
})
export class ProduitService {
  private baseUrl = 'http://localhost:8080/produits'; // Backend endpoint

  constructor(private http: HttpClient) {}

  // Method to add a product
  addProduit(produit: any): Observable<any> {
    return this.http.post(this.baseUrl, produit);
  }

  // (Optional) Method to fetch all products
  getProduits(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

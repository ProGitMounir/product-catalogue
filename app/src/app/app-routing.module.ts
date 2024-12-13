import { RouterModule, Routes } from "@angular/router";
import { AfficherProduitsComponent } from "./afficher-produits/afficher-produits.component";
import { AjouterProduitComponent } from "./ajouter-produit/ajouter-produit.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: AfficherProduitsComponent },
    { path: 'ajouter', component: AjouterProduitComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
export class Produit {
    id: number;
    reference: string;
    description: string;
    prixUnitaire: number;
    categorie: string;

    constructor(id: number, reference: string, description: string, prixUnitaire: number, categorie: string) {
        this.id = id;
        this.reference = reference;
        this.description = description;
        this.prixUnitaire = prixUnitaire;
        this.categorie = categorie;
      }
}
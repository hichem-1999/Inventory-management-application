import { Categorie } from "./categorie";
import { CommandeAchat } from "./commandeAchat";
import { Marque } from "./marque";

export interface Produit{
    id:number;
    libPrd:String;
    descriptionPrd:String;
    prixPrd:number;
    soldePrd:String;
    quantiteDispoPrd:number;
    nouveautePrd:String;
    
    dateAjout:String;
    categorie:Categorie;
    marque:Marque;

}
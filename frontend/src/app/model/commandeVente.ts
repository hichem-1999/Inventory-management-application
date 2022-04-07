import { Client } from "./client";
import { Produit } from "./produit";


export interface CommandeVente{
    id:number;
    dateCmd:Date;
    montantCmd:String;
    delaiLivrCmd:String;
    lieuLiverCmd:String;
    modeLiver:String;
    prixTotLiver:number;
    modePaiement:String;
    client:Client;
    qteVendu:number;
    produits:Produit[];

}
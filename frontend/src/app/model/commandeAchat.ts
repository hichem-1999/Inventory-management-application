import { Fournisseur } from "./fournisseur";

export interface CommandeAchat{
    id:number;
    dateCmd:Date;
    montantCmd:String;
    delaiLivrCmd:String;
    lieuLiverCmd:String;
    modeLiver:String;
    prixTotLiver:number;
    modePaiement:String;
    products:String;
    qteAchete:number;
    fournisseur:Fournisseur;

}
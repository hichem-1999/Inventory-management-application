import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from 'app/model/categorie';
import { CommandeAchat } from 'app/model/commandeAchat';
import { Fournisseur } from 'app/model/fournisseur';
import { Marque } from 'app/model/marque';
import { Produit } from 'app/model/produit';

import { CategorieService } from 'app/service/categorie.service';
import { CommandeAchatService } from 'app/service/commandeAchat.service';
import { FournisseurService } from 'app/service/fournisseur.service';
import { MarqueService } from 'app/service/marque.service';
import { ProduitService } from 'app/service/produit.service';

declare var $: any;
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {
  
  public qte: number = 0;

  showNotification(from, align,title:String){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: title+" ajouté"

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

  public produits: Produit[] = [];
  public editProduit: any ;
  public deleteProduit: any;

  public marques: Marque[] = [];
  public categories: Categorie[] = [];
 
  //public fournisseurs: Fournisseur[] = [];

  constructor(private produitService: 
    ProduitService,private categorieService: CategorieService,private marqueService:MarqueService,private commandeAchatService:CommandeAchatService) { }

  ngOnInit(): void {
    this.getProduit();
    this.getCategorie();
    this.getMarque();
    this.getCommandeAchat();
 
   // this.getFournisseur();

  }
  public getProduit(): void {
    this.produitService.getProduit().subscribe(
      (response: Produit[]) => {
        this.produits = response;
        console.log(this.produits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getQteAchete(libPrd:String): void {
    this.produitService.getQteAchete(libPrd).subscribe(
      (response: number) => {
        this.qte = response;
        console.log(this.qte);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public commandeAchats: CommandeAchat[] = [];
  public getCommandeAchat(): void {
    this.commandeAchatService.getCommandeAchat().subscribe(
      (response: CommandeAchat[]) => {
        this.commandeAchats = response;
        console.log(this.commandeAchats);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddProduit(addForm: NgForm): void {
    this.produitService.addProduit(addForm.value).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getProduit();
       
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log( addForm.value);
        addForm.reset();
      }
    );
  }
  public getCategorie(): void {
    this.categorieService.getCategorie().subscribe(
      (response: Categorie[]) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getMarque(): void {
    this.marqueService.getMarque().subscribe(
    (response: Marque[]) => {
    this.marques = response;
    console.log(this.marques);
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
    );
    }
    

}

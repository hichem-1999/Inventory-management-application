import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'app/model/categorie';
import { CommandeAchat } from 'app/model/commandeAchat';
import { Marque } from 'app/model/marque';
import { Produit } from 'app/model/produit';
import { CategorieService } from 'app/service/categorie.service';
import { CommandeAchatService } from 'app/service/commandeAchat.service';
import { MarqueService } from 'app/service/marque.service';
import { ProduitService } from 'app/service/produit.service';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit, OnChanges {

  public produits: Produit[] = [];
  public editProduit: any ;
  public deleteProduit: any;
  public categories: Categorie[] = [];
  public marques: Marque[] = [];
 

  constructor(
    private produitService: ProduitService,
    private categorieService: CategorieService,
    private marqueService:MarqueService,
    private commandeAchatService:CommandeAchatService,
    //private router: Router 
   
) { }

    ngOnChanges(): void {

    }

  ngOnInit(): void {
    this.getProduit();
    this.getCategorie();
    this.getMarque()
    this.getCommandeAchat();

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
  public getAllProduitByCateg(id:number): void {
    this.produitService.getAllProduitByCateg(id).subscribe(
      (response: Produit[]) => {
        this.produits = response;
        console.log(this.produits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  public getAllProduitByMarque(id:number): void {
    this.produitService.getAllProduitByMarque(id).subscribe(
      (response: Produit[]) => {
        this.produits = response;
        console.log(this.produits);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  public onUpdateProduit(produit: Produit): void {
   
    this.produitService.editProduit(produit).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getProduit();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteProduit(idPrd: number): void {
    this.produitService.deleteProduit(idPrd).subscribe(
      (response: void) => {
        console.log(response);
        this.getProduit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchProduit(key: string): void {
    console.log(key);
    const results: Produit[] = [];
    for (const produit of this.produits) {
      if (produit.libPrd.toLowerCase().indexOf(key.toLowerCase()) !== -1,
      produit.soldePrd.toLowerCase().indexOf(key.toLowerCase()) !== -1,
      produit.descriptionPrd.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      ) {
        results.push(produit);
      }
    }
    this.produits = results;
    if (results.length === 0 || !key) {
      this.getProduit();
    }
  }


public onOpenModal(produit: any, mode: string): void { 
  
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
 
  if (mode === 'edit') {
   
    this.editProduit = produit;
   button.setAttribute('data-target', '#updateProduitModal');
   
    //router link to new page (contenue)
    //this.router.navigate(['/dashboard']);
  }
  if (mode === 'delete') {
    this.deleteProduit=produit;
    button.setAttribute('data-target', '#deleteProduitModal');
  }
  container?.appendChild(button);
  button.click();
}
  
}




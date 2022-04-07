import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fournisseur } from 'app/model/fournisseur';

import { FournisseurService } from 'app/service/fournisseur.service';


@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrls: ['./liste-fournisseur.component.css']
})
export class ListeFournisseurComponent implements OnInit {

  public fournisseurs: Fournisseur[] = [];

  public editFournisseur: any ;
  public deleteFournisseur: any;

  constructor(
    private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.getFournisseur();
      }
  public getFournisseur(): void {
    this.fournisseurService.getFournisseur().subscribe(
      (response: Fournisseur[]) => {
        this.fournisseurs = response;
        console.log(this.fournisseurs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onUpdateFournisseur(fournisseur: Fournisseur): void {
    this.fournisseurService.editFournisseur(fournisseur).subscribe(
      (response: Fournisseur) => {
        console.log(response);
        this.getFournisseur();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteFournisseur(idFrs: number): void {
    this.fournisseurService.deleteFournisseur(idFrs).subscribe(
      (response: void) => {
        console.log(response);
        this.getFournisseur();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchFournisseur(key: string): void {
    console.log(key);
    const results: Fournisseur[] = [];
    for (const fournisseur of this.fournisseurs) {
      if (fournisseur.nomUser.toLowerCase().indexOf(key.toLowerCase()) !== -1,
      fournisseur.paysUser.toLowerCase().indexOf(key.toLowerCase()) !== -1,
      fournisseur.villeUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      ) {
        results.push(fournisseur);
      }
    }
    this.fournisseurs = results;
    if (results.length === 0 || !key) {
      this.getFournisseur();
    }
  }


public onOpenModal(fournisseur: any, mode: string): void { 
  
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
 
  if (mode === 'edit') {
    this.editFournisseur = fournisseur;
    button.setAttribute('data-target', '#updateFournisseurModal');
  }
  if (mode === 'delete') {
    this.deleteFournisseur=fournisseur;
    button.setAttribute('data-target', '#deleteFournisseurModal');
    console.log('function work or not');
  }
 
  container?.appendChild(button);
  button.click();
}
  
}



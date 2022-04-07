import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'app/model/client';
import { CommandeVente } from 'app/model/commandeVente';
import { Produit } from 'app/model/produit';
import { ClientService } from 'app/service/client.service';
import { CommandeVenteService } from 'app/service/commandeVente.service';
import { ProduitService } from 'app/service/produit.service';

@Component({
  selector: 'app-liste-commande-vente',
  templateUrl: './liste-commande-vente.component.html',
  styleUrls: ['./liste-commande-vente.component.css']
})
export class ListeCommandeVenteComponent implements OnInit {
  public produits: Produit[] = [];
  public commandeVentes: CommandeVente[] = [];
  public editCommandeVente: CommandeVente ;
  public deleteCommandeVente: any;
  constructor(private commandeVenteService: 
    CommandeVenteService,private produitService:ProduitService
    ,private clientService:
		ClientService) { }

  ngOnInit(): void {
    this.getCommandeVente();
    this.getClient();
    this.getProduit();
  
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
  public clients: Client[] = [];
		
		public getClient(): void {
		this.clientService.getClient().subscribe(
		(response: Client[]) => {
		this.clients = response;
		console.log(this.clients);
		},
		(error: HttpErrorResponse) => {
		alert(error.message);
		}
		);
		}
  public getCommandeVente(): void {
    this.commandeVenteService.getCommandeVente().subscribe(
      (response: CommandeVente[]) => {
        this.commandeVentes = response;
        console.log(this.commandeVentes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddCommandeVente(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.commandeVenteService.addCommandeVente(addForm.value).subscribe(
      (response: CommandeVente) => {
        console.log(response);
        this.getCommandeVente();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateCommandeVente(commandeVente: CommandeVente): void {
    this.commandeVenteService.editCommandeVente(commandeVente).subscribe(
      (response: CommandeVente) => {
        console.log(response);
        this.getCommandeVente();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteCommandeVente(idUser: number): void {
    this.commandeVenteService.deleteCommandeVente(idUser).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommandeVente();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchCommandeVente(key: string): void {
    console.log(key);
    const results: CommandeVente[] = [];
    for (const commandeVente of this.commandeVentes) {
      if (
        commandeVente.client.nomUser.toLowerCase().indexOf(key.toLowerCase()) !== -1,
        commandeVente.modePaiement.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      ) {
        results.push(commandeVente);
      }
    }
    this.commandeVentes = results;
    if (results.length === 0 || !key) {
      this.getCommandeVente();
    }
  }


public onOpenModal(commandeVente: any, mode: string): void { 
  
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.editCommandeVente = commandeVente;
    button.setAttribute('data-target', '#updateCommandeVenteModal');
  }
  if (mode === 'delete') {
    this.deleteCommandeVente=commandeVente;
    button.setAttribute('data-target', '#deleteCommandeVenteModal');
  }
  container?.appendChild(button);
  button.click();
}


}
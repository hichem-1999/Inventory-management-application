import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'app/model/client';
import { CommandeVente } from 'app/model/commandeVente';
import { Produit } from 'app/model/produit';
import { ClientService } from 'app/service/client.service';
import { CommandeVenteService } from 'app/service/commandeVente.service';
import { ProduitService } from 'app/service/produit.service';
declare var $: any;
@Component({
  selector: 'app-ajout-commande-vente',
  templateUrl: './ajout-commande-vente.component.html',
  styleUrls: ['./ajout-commande-vente.component.css']
})
export class AjoutCommandeVenteComponent implements OnInit {
  

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
  public commandeVentes: CommandeVente[] = [];
  public editCommandeVente: any ;
  public deleteCommandeVente: any;

  constructor(private commandeVenteService: 
    CommandeVenteService,private clientService:
		ClientService,private produitService:ProduitService) { }

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
  public onAddCommandeVente(addForm: NgForm): void {
    let commandeVente : CommandeVente = null;
    commandeVente = addForm.value;
    let produitt: Produit = null;
    produitt = addForm.value.produit;
    commandeVente.produits = [];
    commandeVente.produits.push(produitt);
    this.commandeVenteService.addCommandeVente(commandeVente).subscribe(
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




}
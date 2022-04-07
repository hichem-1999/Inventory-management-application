import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommandeAchat } from 'app/model/commandeAchat';
import { Fournisseur } from 'app/model/fournisseur';
import { CommandeAchatService } from 'app/service/commandeAchat.service';
import { FournisseurService } from 'app/service/fournisseur.service';

@Component({
  selector: 'app-liste-commande-achat',
  templateUrl: './liste-commande-achat.component.html',
  styleUrls: ['./liste-commande-achat.component.css']
})
export class ListeCommandeAchatComponent implements OnInit {
  public commandeAchats: CommandeAchat[] = [];
  public editCommandeAchat: any ;
  public deleteCommandeAchat: any;

  public fournisseurs: Fournisseur[] = [];
  constructor(
    private commandeAchatService: CommandeAchatService,
    private fournisseurService: FournisseurService ) { }

  ngOnInit(): void {
    this.getCommandeAchat();
    this.getFournisseur();
  }
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
  public onAddCommandeAchat(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.commandeAchatService.addCommandeAchat(addForm.value).subscribe(
      (response: CommandeAchat) => {
        console.log(response);
        this.getCommandeAchat();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateCommandeAchat(commandeAchat: CommandeAchat): void {
    this.commandeAchatService.editCommandeAchat(commandeAchat).subscribe(
      (response: CommandeAchat) => {
        console.log(response);
        this.getCommandeAchat();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteCommandeAchat(idUser: number): void {
    this.commandeAchatService.deleteCommandeAchat(idUser).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommandeAchat();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchCommandeAchat(key: string): void {
    console.log(key);
    const results: CommandeAchat[] = [];
    for (const commandeAchat of this.commandeAchats) {
      if (
        commandeAchat.fournisseur.nomUser.toLowerCase().indexOf(key.toLowerCase()) !== -1,
        commandeAchat.modePaiement.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      ) {
        results.push(commandeAchat);
      }
    }
    this.commandeAchats = results;
    if (results.length === 0 || !key) {
      this.getCommandeAchat();
    }
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


public onOpenModal(commandeAchat: any, mode: string): void { 
  console.log('function work or not');
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.editCommandeAchat = commandeAchat;
    button.setAttribute('data-target', '#updateCommandeAchatModal');
  }
  if (mode === 'delete') {
    this.deleteCommandeAchat=commandeAchat;
    button.setAttribute('data-target', '#deleteCommandeAchatModal');
  }
  container?.appendChild(button);
  button.click();
}


}
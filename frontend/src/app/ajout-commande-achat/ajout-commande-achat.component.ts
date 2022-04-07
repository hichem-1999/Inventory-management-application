import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommandeAchat } from 'app/model/commandeAchat';
import { Fournisseur } from 'app/model/fournisseur';
import { CommandeAchatService } from 'app/service/commandeAchat.service';
import { FournisseurService } from 'app/service/fournisseur.service';
declare var $: any;
@Component({
  selector: 'app-ajout-commande-achat',
  templateUrl: './ajout-commande-achat.component.html',
  styleUrls: ['./ajout-commande-achat.component.css']
})

export class AjoutCommandeAchatComponent implements OnInit {

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
public fournisseurs: Fournisseur[] = [];

  public commandeAchats: CommandeAchat[] = [];
  public editCommandeAchat: any ;
  public deleteCommandeAchat: any;

  constructor(
    private commandeAchatService: CommandeAchatService ,
    private fournisseurService: FournisseurService) { }

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
  public onAddCommandeAchat(addForm: NgForm): void {

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





}

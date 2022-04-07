import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'app/model/client';
import { ClientService } from 'app/service/client.service';
declare var $: any;
@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {
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

public clients: Client[] = [];
public editClient: any ;
public deleteClient: any;

        constructor(
private clientService: ClientService,
) { }

        ngOnInit(): void {
        this.getClient();
        

        }
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

public onAddClient(addForm: NgForm): void {
       
        this.clientService.addClient(addForm.value).subscribe(
        (response: Client) => {
        console.log(response);
        this.getClient();
        addForm.reset();
        },
        (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        }
        );
        }



        }

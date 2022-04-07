import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Marque } from 'app/model/marque';
import { MarqueService } from 'app/service/marque.service';
declare var $: any;
@Component({
  selector: 'app-ajout-marque',
  templateUrl: './ajout-marque.component.html',
  styleUrls: ['./ajout-marque.component.css']
})
export class AjoutMarqueComponent implements OnInit {
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

public marques: Marque[] = [];
public editMarque: any ;
public deleteMarque: any;

        constructor(private marqueService:MarqueService) { }

        ngOnInit(): void {
        this.getMarque();
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

public onAddMarque(addForm: NgForm): void {
        this.marqueService.addMarque(addForm.value).subscribe(
        (response: Marque) => {
        console.log(response);
        this.getMarque();
        addForm.reset();
        },
        (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        }
        );
        }



}

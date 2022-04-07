import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Marque } from 'app/model/marque';
import { MarqueService } from 'app/service/marque.service';

@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
  styleUrls: ['./liste-marque.component.css']
})
export class ListeMarqueComponent implements OnInit {

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

public onUpdateMarque(marque: Marque): void {
        this.marqueService.editMarque(marque).subscribe(
        (response: Marque) => {
        console.log(response);
        this.getMarque();

        },
        (error: HttpErrorResponse) => {
        alert(error.message);
        }
        );
        }
public onDeleteMarque(idFrs: number): void {
        this.marqueService.deleteMarque(idFrs).subscribe(
        (response: void) => {
        console.log(response);
        this.getMarque();
        },
        (error: HttpErrorResponse) => {
        alert(error.message);
        }
        );
        }
public searchMarque(key: string): void {
        
        const results: Marque[] = [];
        for (const marque of this.marques) {
        if (marque.libMarque.toLowerCase().indexOf(key.toLowerCase()) !== -1

        ) {
        results.push(marque);
        }
        }
        this.marques = results;
        if (results.length === 0 || !key) {
        this.getMarque();
        }
        }


public onOpenModal(marque: any, mode: string): void {

        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');

        if (mode === 'edit') {
        this.editMarque = marque;
        button.setAttribute('data-target', '#updateMarqueModal');
        }
        if (mode === 'delete') {
        this.deleteMarque=marque;
        button.setAttribute('data-target', '#deleteMarqueModal');
        }
        container?.appendChild(button);
        button.click();
        }

}

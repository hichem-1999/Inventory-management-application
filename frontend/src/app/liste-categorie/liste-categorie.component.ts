import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from 'app/model/categorie';
import { CategorieService } from 'app/service/categorie.service';


@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {

  public categories: Categorie[] = [];
  public editCategorie: any ;
  public deleteCategorie: any;

  constructor(private categorieService: 
    CategorieService) { }

  ngOnInit(): void {
    this.getCategorie();
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
  
  public onUpdateCategorie(categorie: Categorie): void {
    this.categorieService.editCategorie(categorie).subscribe(
      (response: Categorie) => {
        console.log(response);
        this.getCategorie();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteCategorie(idCategorie: number): void {
    this.categorieService.deleteCategorie(idCategorie).subscribe(
      (response: void) => {
        console.log(response);
        this.getCategorie();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchCategorie(key: string): void {
    console.log(key);
    const results: Categorie[] = [];
    for (const categorie of this.categories) {
      if (categorie.libCategorie.toLowerCase().indexOf(key.toLowerCase()) !== -1
      
      ) {
        results.push(categorie);
      }
    }
    this.categories = results;
    if (results.length === 0 || !key) {
      this.getCategorie();
    }
  }


public onOpenModal(categorie: any, mode: string): void { 
  
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.editCategorie = categorie;
    button.setAttribute('data-target', '#updateCategorieModal');
  }
  if (mode === 'delete') {
    this.deleteCategorie=categorie;
    button.setAttribute('data-target', '#deleteCategorieModal');
    console.log('function work or not');
  }
  container?.appendChild(button);
  button.click();
}

}

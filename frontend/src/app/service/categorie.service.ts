import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'app/model/categorie';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getCategorie():Observable<Categorie[]>{
      return this.http.get<Categorie[]>
      (`${this.apiServerUrl}/categorie/all`);
    }
    public addCategorie(categorie:Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(`${this.apiServerUrl}/categorie/add`,categorie);
    }
    public editCategorie(categorie:Categorie):Observable<Categorie>{
      return this.http.put<Categorie>(`${this.apiServerUrl}/categorie/update`,categorie);
    }
   public deleteCategorie(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/categorie/delete/${id}`);
   }
   
  
}
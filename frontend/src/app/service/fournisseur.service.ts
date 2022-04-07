import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fournisseur } from 'app/model/fournisseur';

import { environment } from 'environments/environment';

import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getFournisseur():Observable<Fournisseur[]>{
      return this.http.get<Fournisseur[]>
      (`${this.apiServerUrl}/fournisseur/all`);
    }
    public addFournisseur(fournisseur:Fournisseur):Observable<Fournisseur>{
      return this.http.post<Fournisseur>(`${this.apiServerUrl}/fournisseur/add`,fournisseur);
    }
    public editFournisseur(fournisseur:Fournisseur):Observable<Fournisseur>{
      return this.http.put<Fournisseur>(`${this.apiServerUrl}/fournisseur/update`,fournisseur);
    }
   public deleteFournisseur(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/fournisseur/delete/${id}`);
   }
   
  
}
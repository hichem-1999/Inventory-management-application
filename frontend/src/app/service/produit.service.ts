import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';

import { Produit } from '../model/produit';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getProduit():Observable<Produit[]>{
      return this.http.get<Produit[]>
      (`${this.apiServerUrl}/produit/all`);
    }
    public getAllProduitByCateg(id:number):Observable<Produit[]>{
      return this.http.get<Produit[]>
      (`${this.apiServerUrl}/produit/byCateg/${id}`);
    }
  
    public getAllProduitByMarque(id:number):Observable<Produit[]>{
      return this.http.get<Produit[]>
      (`${this.apiServerUrl}/produit/byMarque/${id}`);
    }
    public addProduit(produit:Produit):Observable<Produit>{
      return this.http.post<Produit>(`${this.apiServerUrl}/produit/add`,produit);
    }
    public editProduit(produit:Produit):Observable<Produit>{
      return this.http.put<Produit>(`${this.apiServerUrl}/produit/update`,produit);
    }
   public deleteProduit(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/produit/delete/${id}`);
   }
   public getQteAchete(libPrd:String):Observable<number>{
    return this.http.get<number>
    (`${this.apiServerUrl}/produit/byQteAchete/${libPrd}`);
  }
  public getTheMostExpensive():Observable<Produit>{
    return this.http.get<Produit>
    (`${this.apiServerUrl}/produit/mostExp`);
  }
  public getTheMostChepar():Observable<Produit>{
    return this.http.get<Produit>
    (`${this.apiServerUrl}/produit/mostChep`);
  }
}
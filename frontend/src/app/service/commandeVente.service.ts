import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeVente } from 'app/model/commandeVente';


import { environment } from 'environments/environment';

import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class CommandeVenteService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getCommandeVente():Observable<CommandeVente[]>{
      return this.http.get<CommandeVente[]>
      (`${this.apiServerUrl}/commandeVente/all`);
    }
    public addCommandeVente(commandeVente:CommandeVente):Observable<CommandeVente>{
      return this.http.post<CommandeVente>(`${this.apiServerUrl}/commandeVente/add`,commandeVente);
    }
    public editCommandeVente(commandeVente:CommandeVente):Observable<CommandeVente>{
      return this.http.put<CommandeVente>(`${this.apiServerUrl}/commandeVente/update`,commandeVente);
    }
   public deleteCommandeVente(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/commandeVente/delete/${id}`);
   }
   
  
}
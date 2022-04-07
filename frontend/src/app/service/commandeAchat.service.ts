import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeAchat } from 'app/model/commandeAchat';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CommandeAchatService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getCommandeAchat():Observable<CommandeAchat[]>{
      return this.http.get<CommandeAchat[]>
      (`${this.apiServerUrl}/commandeAchat/all`);
    }
    public addCommandeAchat(commandeAchat:CommandeAchat):Observable<CommandeAchat>{
      return this.http.post<CommandeAchat>(`${this.apiServerUrl}/commandeAchat/add`,commandeAchat);
    }
    public editCommandeAchat(commandeAchat:CommandeAchat):Observable<CommandeAchat>{
      return this.http.put<CommandeAchat>(`${this.apiServerUrl}/commandeAchat/update`,commandeAchat);
    }
   public deleteCommandeAchat(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/commandeAchat/delete/${id}`);
   }
   public getBenefice():Observable<number>{
    return this.http.get<number>
    (`${this.apiServerUrl}/commandeAchat/benefice`);
  }
  public getNumberArticle():Observable<number>{
    return this.http.get<number>
    (`${this.apiServerUrl}/commandeAchat/numberArticle`);
  }
  
}
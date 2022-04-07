import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'app/model/client';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getClient():Observable<Client[]>{
      return this.http.get<Client[]>
      (`${this.apiServerUrl}/client/all`);
    }
    public addClient(client:Client):Observable<Client>{
      return this.http.post<Client>(`${this.apiServerUrl}/client/add`,client);
    }
    public editClient(client:Client):Observable<Client>{
      return this.http.put<Client>(`${this.apiServerUrl}/client/update`,client);
    }
   public deleteClient(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/client/delete/${id}`);
   }
   
  
}
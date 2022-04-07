import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marque } from 'app/model/marque';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

    
    
    public getMarque():Observable<Marque[]>{
      return this.http.get<Marque[]>
      (`${this.apiServerUrl}/marque/all`);
    }
    public addMarque(marque:Marque):Observable<Marque>{
      return this.http.post<Marque>(`${this.apiServerUrl}/marque/add`,marque);
    }
    public editMarque(marque:Marque):Observable<Marque>{
      return this.http.put<Marque>(`${this.apiServerUrl}/marque/update`,marque);
    }
   public deleteMarque(id:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/marque/delete/${id}`);
   }
   
  
}
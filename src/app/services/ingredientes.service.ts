import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IngredientesService {
  constructor(private http: HttpClient) { }  
  getData() {
    return this.http.get<any[]>('assets/json/ingredientes.json');
  }
}

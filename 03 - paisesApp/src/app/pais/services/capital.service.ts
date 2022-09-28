import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {


  

  private apiUrl: string = 'https://restcountries.com/v2';
  
  public resultados: Country[] = [];
  constructor(private http: HttpClient) { }

  
  buscarPais(termino: string):Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${ termino }`;
    
    return this.http.get<Country[]>(url);

  }
}





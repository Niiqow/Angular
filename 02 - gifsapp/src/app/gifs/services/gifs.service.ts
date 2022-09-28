import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private apikey : string = 'sd7DxhfNIg45SvsWzfmtaB0LOVWdkhM8';
private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
private _historial: string[] = [];


public resultados: Gif[] = [];

get historial(){
  
  return [...this._historial];

}

constructor (private http: HttpClient){

  if(localStorage.getItem('historial')){
    this._historial = JSON.parse (localStorage.getItem('historial')! )|| [];
   this.resultados = JSON.parse (localStorage.getItem('ult_busqueda')! )|| [];

  }



}

buscarGifs(query: string = '' ){
  query = query.trim().toLocaleLowerCase(); // SOLO MINUSCULA
if(!this._historial.includes(query)){ 
this._historial.unshift(query);//reemplazo de existentes
this._historial = this._historial.splice(0,10);//limita la cantidad del arreglo a 10

localStorage.setItem('historial',JSON.stringify(this._historial));




}

const params = new HttpParams()
.set('api_key', this.apikey)
.set('limit', '10')
.set('q', query);




this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
.subscribe( (resp) => {

this.resultados = resp.data;
localStorage.setItem('ult_busqueda',JSON.stringify(this.resultados));
});

}



}

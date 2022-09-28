import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
styles: [`

li{
  cursor: pointer;
}

`]
})
export class PorPaisComponent{
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  get resultados(){
    return this.PaisService.resultados; 
  }


  
  constructor(private PaisService: PaisService) { }

  


  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
  //console.log(this.termino);

  this.PaisService.buscarPais(termino).subscribe( (paises) => {
   this.paises = paises;
  
  }, (err) => {
   // console.log(err);
    this.hayError = true;
    this.paises = [];
  });
  }

  sugerencias(termino: string){
this.hayError = false;
this.termino = termino;
this.mostrarSugerencias = true;
//TODO: crear sugerencias

this.PaisService.buscarPais(termino).subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
(err) => this.paisesSugeridos = []



);
  }

  buscarSugerido(termino: string){
  this.buscar(termino);

  }
  
}

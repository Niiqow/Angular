import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent implements OnInit {



  ngOnInit(): void {
  }

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  get resultados(){
    return this.PaisService.resultados; 
  }


  
  constructor(private PaisService: CapitalService) { }

  


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
//TODO: crear sugerencias


  }
}





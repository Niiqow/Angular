import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  
  button{
    margin-right :5px;
  }
  
  `]
})



export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN'
    , 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  region: Country[] = [];
  termino: string = '';
  hayError: boolean = false;
  constructor(private PaisService: PaisService) { }

  getClaseCSS(region: string): string {
    return ((region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary');
  }

  activarRegion(termino: string) {


    //TODO: hacer llamado al servicio 
if(termino === this.regionActiva){return}
    this.PaisService.buscarRegion(termino);
this.regionActiva = termino;
this.region = [];

    this.hayError = false;
    this.termino = termino;
    //console.log(this.termino);

    this.PaisService.buscarRegion(termino).subscribe((paises) => {
    
      this.region = paises;

    });
  
  }



}

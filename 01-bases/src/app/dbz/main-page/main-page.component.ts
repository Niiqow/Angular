import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../service/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {



  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }



  agregarNuevoPersonaje(argumento: Personaje){
    
  }

  constructor( private DbzServices: DbzServices){

  }

}

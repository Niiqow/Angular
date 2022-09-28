import { Component} from '@angular/core';
import { DbzServices } from '../service/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {
//@Input() personajes: Personaje[] = [];

get personajes(){
  return this.DbzServices.personajes;
}

constructor( private DbzServices: DbzServices){

}
}

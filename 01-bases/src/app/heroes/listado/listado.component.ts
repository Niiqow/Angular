import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

heroes: string[] = ['Spiderman',' Ironman', 'Hulk','Thor','Captain America'];
heroeBorrado: string = '';
cantidad: number = this.heroes.length;

borrarHeroe(){

this.cantidad -= 1;

this.heroeBorrado= this.heroes.shift() || '';

}

}

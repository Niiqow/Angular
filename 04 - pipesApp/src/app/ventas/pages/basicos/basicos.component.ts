import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'nicolas';
  nombreUpper: string = 'NICOLAS';
  nombreCompleto: string = 'nIcoLaS AlmOnAciD'

  fecha: Date = new Date();

}

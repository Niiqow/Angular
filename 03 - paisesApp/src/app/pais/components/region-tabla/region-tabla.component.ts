import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',

})
export class RegionTablaComponent {

  constructor() { }

  @Input() region: Country[] = [];

}

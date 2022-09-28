import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private primengConfig: PrimeNGConfig) {}
nombre: string = 'nicolas almonacid';

mostrarNombre(){
  console.log(this.nombre);
}
ngOnInit() {
  this.primengConfig.ripple = true;
}

}

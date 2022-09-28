import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

nombre: string = 'Nicolas';
genero: string = 'masculino';

nombre1: string = 'Maria';
genero1: string = 'femenino';

//i18nselect
invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}
//i18nplural

clientes: string[]= ['Maria','Juan','Fernando','Eduardo'];
cantidad: number = this.clientes.length;
clientesMapa = {
  '=0' : 'no tenemos ningun cliente esperando',
  '=1' : 'tenemos 1 cliente esperando',
  'other': 'tenemos # clientes esperando'
}

cambiarPersona(){

this.nombre = this.nombre1;
this.genero = this.genero1;
}

borrarCliente(){
  
  this.cantidad -= 1;

this.clientes.shift() || '';
//this.clientes.pop()  //va eliminando el ultimo del arreglo

}


//KeyValue pipe

persona = {
  nombre: 'Nicolas',
  edad: 23,
  username: 'Niiqow'
}


//Json pipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]

//Async Pipe

miObservable = interval(2000); //0,1,2,3,4...

valorPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
resolve('Tenemos data de promesa');
  },3500)
});

}

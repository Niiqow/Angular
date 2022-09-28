import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
  



  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

debouncer: Subject<string> = new Subject();

 termino: string = '';

 ngOnInit(): void { // se dispara cuando el componente ya esta creado
this.debouncer
.pipe(debounceTime(300))
.subscribe(valor =>{
  //console.log('debouncer', valor );
  this.onDebounce.emit(valor);
})
}

 buscar(){
this.onEnter.emit(this.termino);

 }
 teclaPresionada(){

this.debouncer.next(this.termino);

 }


}

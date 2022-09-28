import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{ titulo }}</h1>

        <button (click) = "acumular(-numero)">- {{numero}}</button>
        <button (click) = "acumular(+numero)">+{{numero}}</button>
        
        <h3>La base es: <strong>{{ base }}</strong></h3>
        <span>{{ numero }}</span>`
    
    
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 5;
    base: number = 5
    acumular(valor: number){
     this.base += valor;
    }
}
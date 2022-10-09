import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Nicolas';
  segundos: number = 0;
  timerSubscription!  : Subscription;
  constructor() {
    console.log('constructor');
   }
   ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }

  ngOnInit(): void {
    console.log('ngOnInit()');
   this.timerSubscription = interval(1000).subscribe(i => {
    this.segundos = i;
   })
  }

  ngOnChanges(): void {
    console.log('ngOnChanges()');
  }

guardar(){

}

}

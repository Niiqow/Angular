import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['',Validators.required],
    pais: ['',Validators.required],
    frontera: ['',Validators.required]
  })

  //Llenar selectores

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: PaisSmall[] | undefined = [];
  cargando: boolean = false;
  constructor(private fb: FormBuilder,
              private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap(region => {
        console.log(region);
this.miFormulario.get('pais')?.reset('');
this.cargando = true;
      }),
      switchMap( region => this.paisesService.getPaisesPorRegion(region) )
    )
    .subscribe(paises => {
      this.paises = paises;
      this.cargando = false;
    })

   
    
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
       tap( ( _ ) => {
      this.miFormulario.get('frontera')?.reset('');
      this.cargando = true;
      }),
      switchMap( codigo => this.paisesService.getPaisPorCodigo(codigo) ),
      switchMap(pais => this.paisesService.getPaisesPorCodigos(pais? pais![0]?.borders: []))
  
    )
    .subscribe( pais => {
      console.log('pais subscribe: ',pais);

      this.fronteras = pais;
      this.cargando = false;
      //this.fronteras = pais ? pais[0]?.borders:[] || [] ;
      console.log('Fronteras: ', this.fronteras);
    
    });


    
  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)] ],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.emailValidator] ],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider] ],
    password: ['',  [Validators.required,Validators.minLength(6) ]],
    password2: ['', [Validators.required] ],
  },{
    validators: [ this.vs.camposIguales('password','password2')]
  });

 

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;
    
    if(errors?.['required']){
      return 'Email es obligatorio';
    }else if(errors?.['pattern']){
      return 'Ingresar correo electrónico válido';
    }else if(errors?.['emailTomado']){
      return 'Correo electrónico ya existe';
    }
    return '';
  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Test test',
      email: 'test1@test.com',
      username: 'test1',
      password: '123456',
      password2: '123456',
    })

  }


  

  campoNoValido(campo: string){
return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;

  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.['required']
  //     && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.['pattern']
  //     && this.miFormulario.get('email')?.touched;
  // }
  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.['emailTomado']
  //     && this.miFormulario.get('email')?.touched;
  // }


}

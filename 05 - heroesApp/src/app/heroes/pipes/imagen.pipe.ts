import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name: 'imagen'
})
export class ImagenPipe implements PipeTransform{
   
transform(valor: Heroe) {
   
return `assets/heroes/${valor.id}.jpg`;

   
   

}

}
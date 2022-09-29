import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name: 'imagen',
    pure: false
})
export class ImagenPipe implements PipeTransform{
   
transform(valor: Heroe) {
   
if(!valor.id && !valor.alt_img){
    return `assets/no-image.png`;
}else if(valor.alt_img){
    return valor.alt_img
}else{

    return `assets/heroes/${valor.id}.jpg`;
}


   
   

}

}
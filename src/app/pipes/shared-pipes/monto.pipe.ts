import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monto'
})
export class MontoPipe implements PipeTransform {

  transform(value: number | string , spacing : boolean = false ,  decimal : number = 2 ): string {

    if (value !== undefined && value !== null) {

      let isNegative = ( Number(value) < 0) 
      let num_parts = [];

      if ( typeof value == 'number'){
        num_parts = value.toString().split(".");
      }else{
        num_parts = value.split(".");
      }

      //Parte entera
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      num_parts[0] = num_parts[0].replace("-","");

      if(spacing)num_parts[0] = ` ${num_parts[0]}`

      //Parte decimal
      if( decimal > 0 ){

        num_parts[1] = num_parts[1] ? num_parts[1] : '';

        if( num_parts[1].length > decimal){
          num_parts[1] = num_parts[1].slice(0,(decimal-num_parts[1].length))
        }

        num_parts[1] = num_parts[1].padEnd(decimal,'0');
        
        if(isNegative){
          return `-$${num_parts.join(",")}`;
        }else{
          return `$${num_parts.join(",")}`;
        }
        
      }

      if(isNegative){
        return `-$${num_parts[0]}`;
      }else{
        return `$${num_parts[0]}`;
      }
    

    } else {
      return '';
    }
  }

}
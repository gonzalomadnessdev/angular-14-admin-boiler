import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaHorarios'
})
export class ListaHorariosPipe implements PipeTransform {

  transform(value: string[][], ...args: any[]): string {



    return value.map((horario)=>{
      return `[${horario.join(' - ')}]`
    }).join(', ')

  }

}

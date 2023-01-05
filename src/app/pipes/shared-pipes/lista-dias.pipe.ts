import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaDias'
})
export class ListaDiasPipe implements PipeTransform {

  transform(value: number[], ...args: any[]): string {

    let listaDias : string[];

    listaDias = value.map((dia)=>{

      let diaStr = ''

      switch (dia) {
        case 0:
          diaStr = 'Domingo'
          break;
        case 1:
          diaStr = 'Lunes'
          break;
        case 2:
          diaStr = 'Martes'
          break;
        case 3:
          diaStr = 'Miercoles'
          break;
        case 4:
          diaStr = 'Jueves'
          break;
        case 5:
          diaStr = 'Viernes'
          break;
        case 6:
          diaStr = 'Sábado'
          break;

        default:
          break;
      }

      return diaStr;

    })

    return listaDias.join(', ')

  }

}

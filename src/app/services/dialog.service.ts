import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSimpleComponent } from '@components/dialog-simple/dialog-simple.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  abrirDialogSimple(titulo : string, botonUnoColor:string = "primary" , botonUno: string = "Aceptar" , botonDos: string = "Cancelar" ,contenido?:string, aftetClosedCallback?: ()=> void){
    let dialogRef = this.dialog.open(DialogSimpleComponent,{
      data: {
        titulo: titulo,
        contenido: contenido,
        opcionTrue: botonUno,
        opcionFalse: botonDos,
        botonUnoColor : botonUnoColor
      },
    })

    dialogRef.afterClosed().subscribe((res) => {
      const flag = Boolean(Number(res));
      if(flag && aftetClosedCallback !== undefined){
        aftetClosedCallback();
      }
    })

    return dialogRef
  }
}

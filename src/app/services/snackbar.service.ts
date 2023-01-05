import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  public duracionDefault : number = 1000;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  public error(mensaje: string) {
    this._snackBar.open(`${mensaje}`, undefined,
      {
        duration: this.duracionDefault,
        panelClass: ['red-snackbar']
      }
    );

  }
  public success(mensaje: string) {
    this._snackBar.open(`${mensaje}`, undefined,
      {
        duration: this.duracionDefault,
        panelClass: ['green-snackbar']
      }
    );
  }

  public info(mensaje: string) {
    this._snackBar.open(`${mensaje}`, undefined,
    {
      duration: this.duracionDefault,
    }
  );
  }
}

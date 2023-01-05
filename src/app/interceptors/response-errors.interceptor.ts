import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from '@services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '@services/snackbar.service';

@Injectable()
export class ResponseErrorsInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private snackBar: SnackBarService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            if (response.body.status && response.body.status == 'error') {

              //whiteList errores
              /*
              if(response.body.mensaje_error == 'La zona nueva tiene intersecciones con zonas ya definidas.'){
                this.snackBar.error(response.body.mensaje_error);
              }else{
                this.snackBar.error('Ha ocurrido un error en la consulta.');
              }
              console.error({ ...response.body , url : response.url})
              */

              //blackList errores
              // if(response.body.mensaje_error == 'Error proveniente de lista negra'){
              //   this.snackBar.error('Ha ocurrido un error en la consulta.');
              //   return;
              // }
              this.snackBar.error(response.body.mensaje_error);
              console.error({ ...response.body , url : response.url})
            }
          }
        }),
        catchError((error : HttpErrorResponse) => {

          //Acciones segun el status
          if (error.status == 401) {
            this.authService.expulsar();
          }

          let mensajeSnackbar = '';

          if (!window.navigator.onLine) {
            mensajeSnackbar = `Su navegador no esta conectado a internet.`
          }else{
            mensajeSnackbar = error.error.mensaje_error;
          }

          if (mensajeSnackbar) this.snackBar.error(mensajeSnackbar);
          console.error(error.error)

          return throwError(() => { return error.error })
        })
      );
  }
}
/*

  if (error.status == 401) this.authService.expulsar();

  if (!window.navigator.onLine) {
    console.error(`Su navegador no esta conectado a internet`);
    //this.toastr.error(`Su navegador no esta conectado a internet`)
  } else {



    this.snackBar.error(error.name);
  }



*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, map, timer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import moment from 'moment';
import { SnackBarService } from './snackbar.service';
import { UsuarioActual } from '@/models/usuarioActual.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.url;
  usuario: UsuarioActual | null = null;

  timer!: Subscription;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: SnackBarService
  ) {
  }

  public login(email: string, password: string) {
    return this.http.post<any>(`${this.url}auth/login`, { email, password }).pipe(map((res) => {
      if (res.status == 'ok') {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('expiracion', res.data.fecha_expiracion);
        this.expiracionTimer();
      }
      return res;
    }))
  }

  public logout() {
    return this.http.post<any>(`${this.url}auth/logout`, {}).pipe(map((res) => {
      if (res.status == 'ok') {
        this.expulsar();
      }
      return res;
    }))
  }

  public me() {
    if(this.usuario){
      return new Observable((subscriber) => {
        subscriber.next();
      });
    }else{
      return this.http.get<any>(`${this.url}auth/me`).pipe(map((res) => {
        if (res.status == 'ok') {
          this.usuario = res.usuario;
        }
        console.log("this.usuario",this.usuario)
        console.log("me",res)
        return res;
      }))
    }
  }

  public cambiarContrasena(nueva_contrasena: string) {
    return this.http.post<any>(`${this.url}auth/cambiar-contrasena`, { nueva_contrasena })
  }

  public expulsar() {
    this.usuario = null
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  public inicializarAplicacion() {
    this.expiracionTimer();
  }

  private expiracionTimer() {

    if (!localStorage.getItem('expiracion')) return;

    let fechaStr = localStorage.getItem('expiracion');
    let fechaExpiracion = moment(fechaStr).toDate();

    this.timer = timer(fechaExpiracion).subscribe(() => {
      this.expulsar();
      this.snackBar.info("Se agotó su tiempo de sesión.")
    })

  }

  public get estaLogueado() {
    return Boolean(localStorage.getItem('token'));
  }

}

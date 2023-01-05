import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadoSidebarService {

  private cambioEstadoSidebarSource = new Subject<string>();
  cambioEstadoSidebar$ = this.cambioEstadoSidebarSource.asObservable();

  constructor() { }

  estadoSidebarEvento(opened:boolean){
    let mensaje = opened  ? 'abierto' : 'cerrado'
    this.cambioEstadoSidebarSource.next(mensaje);
  }

}

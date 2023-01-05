import { CrearUsuarioDTO } from '@/models/dto/crearUsuario.dto';
import { ModificarUsuarioDTO } from '@/models/dto/modificarUsuario.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = environment.url;

  constructor(
    private http: HttpClient,
  ) { }

  traerListaUsuariosPaginados(pagina: number) {
    return this.http.get<any>(`${this.url}usuarios`, { params: { paginado: 1, page: pagina } })
  }

  traerListaUsuarios() {
    return this.http.get<any>(`${this.url}usuarios`, { params: { paginado: 0 } })
  }

  traerUsuario(id:number) {
    return this.http.get<any>(`${this.url}usuarios/${id}`)
  }

  crearUsuario(datos : CrearUsuarioDTO) {
    return this.http.post<any>(`${this.url}usuarios`, { ...datos })
  }

  modificarUsuario(id:number, datos : ModificarUsuarioDTO) {
    return this.http.put<any>(`${this.url}usuarios/${id}`, { ...datos })
  }

  eliminarUsuario(id:number, datos : ModificarUsuarioDTO) {
    return this.http.put<any>(`${this.url}usuarios/${id}`, { ...datos })
  }

}

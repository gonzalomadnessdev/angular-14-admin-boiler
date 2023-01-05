import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url = environment.url;

  constructor(
    private http: HttpClient,
  ) { }

  traerListaRoles() {
    return this.http.get<any>(`${this.url}roles`)
  }

}

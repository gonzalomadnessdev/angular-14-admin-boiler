import { Usuario } from '@/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { RolesService } from '@services/roles.service';
import { UsuariosService } from '@services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  paginaActual: number = 1;
  paginaUltima: number = 1;

  constructor(
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.traerFiltros();
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuariosService.traerListaUsuariosPaginados(this.paginaActual).subscribe((res) => {
      if (res.status == 'ok') {
        this.usuarios = res.usuarios.data;
        this.paginaActual = res.usuarios.current_page;
        this.paginaUltima = res.usuarios.last_page;
        this.guardarFiltros()
      }
    })
  }

  actualizarPagina(event: any) {
    this.paginaActual = event;
    this.obtenerUsuarios();
  }

  private guardarFiltros() {
    const filtros = {
      pagina: this.paginaActual,
    }

    sessionStorage.setItem('usuarios', JSON.stringify(filtros))
  }

  private traerFiltros() {
    if (sessionStorage.getItem('usuarios')) {
      const filtros = JSON.parse(sessionStorage.getItem('usuarios')!)

      if (filtros.pagina) this.paginaActual = filtros.pagina;
    }
  }

}

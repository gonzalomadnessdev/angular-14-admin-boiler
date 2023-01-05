import { Menu } from '@/models/menu.model';
import { UsuarioActual } from '@/models/usuarioActual.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { EstadoSidebarService } from '@services/estado-sidebar.service';
import { TITLE } from 'brand/const';
import menu from '../../../assets/json/menu.json'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  title = TITLE;

  events: string[] = [];
  opened: boolean = true;

  secciones: Menu[] = [];

  usuario: UsuarioActual | null = null;

  constructor(
    private authService: AuthService,
    private estadoSidebarService: EstadoSidebarService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.authService.me().subscribe(() => {
      this.usuario = this.authService.usuario
      this.habilitarSecciones();
      this.detectarSeccionActiva();
    });
  }

  ngAfterViewInit() {

  }

  doWhenOpen() {

  }

  doWhenClose() {

  }

  toggle() {
    this.estadoSidebarService.estadoSidebarEvento(this.opened);
    this.sidenav.toggle()
  }

  public logout() {
    this.authService.logout().subscribe();
  }

  private habilitarSecciones() {
    this.secciones = menu.menu;
  }


  detectarSeccionActiva() {
    this.secciones.map((seccion) => {
      if (seccion.submenu) {
        let conicideRuta = seccion.submenu?.find((item) => `/${item.ruta}` == this.router.url);
        if (conicideRuta !== undefined) {
          seccion.activo = true;
        }
      }
      return seccion
    })
  }

}

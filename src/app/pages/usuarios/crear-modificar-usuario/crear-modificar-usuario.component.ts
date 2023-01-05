import { CrearUsuarioDTO } from '@/models/dto/crearUsuario.dto';
import { ModificarUsuarioDTO } from '@/models/dto/modificarUsuario.dto';
import { Rol } from '@/models/rol.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '@services/roles.service';
import { SnackBarService } from '@services/snackbar.service';
import { UsuariosService } from '@services/usuarios.service';

@Component({
  selector: 'app-crear-modificar-usuario',
  templateUrl: './crear-modificar-usuario.component.html',
  styleUrls: ['./crear-modificar-usuario.component.scss']
})
export class CrearModificarUsuarioComponent implements OnInit {

  idUrl!: number | null;

  form: FormGroup;
  verContrasena: boolean = false;

  estaHabilitado: boolean | null = null;
  deshabilitarBotones: boolean = false;

  listadoRoles : Rol[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private snackBar: SnackBarService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      contrasena: ['', Validators.required],
      rol: ['', Validators.required],
    })
    this.route.paramMap.subscribe((param) => {

      const id = Number(param.get('id'));
      if (isFinite(id) && Number.isInteger(id)) {
        this.idUrl = id;
      } else {
        this.idUrl = null;
      }

      this.rolesService.traerListaRoles().subscribe((res)=>{
        if(res.status == 'ok'){
          this.listadoRoles = res.roles;
        }
      })

    })
  }

  ngOnInit(): void {
    this.traerUsuario();
  }

  private traerUsuario() {
    if (this.pageEnModoModificar) {
      this.usuariosService.traerUsuario(this.idUrl!).subscribe((res) => {
        if (res.status == 'ok') {
          const usuario = res.usuario;
          this.formEmail?.setValue(usuario.email);
          this.formNombre?.setValue(usuario.nombre);
          this.formApellido?.setValue(usuario.apellido);
          this.formContrasena?.setValue('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
          usuario.roles.length ? this.formRol?.setValue(usuario.roles[0].rol) : this.formRol?.setValue(null);
        }
      })
    }
  }

  enviarUsuario() {
    if (this.form.valid) {
      this.deshabilitarBotones = true;
      if(this.pageEnModoModificar){
        let datos: ModificarUsuarioDTO = {
          email: this.formEmail?.value,
          nombre: this.formNombre?.value,
          apellido: this.formApellido?.value,
          roles: [this.formRol?.value]
        }
        this.usuariosService.modificarUsuario(this.idUrl!, datos).subscribe((res)=>{
          if (res.status == 'ok') {
            this.snackBar.success(res.mensaje);
          }
          this.deshabilitarBotones = false;
        })
      }else{
        let datos: CrearUsuarioDTO = {
          email: this.formEmail?.value,
          nombre: this.formNombre?.value,
          apellido: this.formApellido?.value,
          password: this.formContrasena?.value,
          roles: [this.formRol?.value]
        }
        this.usuariosService.crearUsuario(datos).subscribe((res) => {
          if (res.status == 'ok') {
            this.snackBar.success(res.mensaje);
            setTimeout(() => {
              this.router.navigate(['/usuarios', res.usuario_id]);
              this.deshabilitarBotones = true;
            }, this.snackBar.duracionDefault / 2)
          }else{
            this.deshabilitarBotones = true;
          }
        })
      }
    } else {
      this.snackBar.info('Formulario Incompleto')
    }
  }

  test(){
    console.log(this.form)
  }

  get pageEnModoModificar() {
    return Boolean(this.idUrl)
  }

  get camposValidos() {
    return (this.form.valid);
  }

  get formEmail() { return this.form.get('email') };
  get formNombre() { return this.form.get('nombre') };
  get formApellido() { return this.form.get('apellido') };
  get formContrasena() { return this.form.get('contrasena') };
  get formRol() { return this.form.get('rol') };

}

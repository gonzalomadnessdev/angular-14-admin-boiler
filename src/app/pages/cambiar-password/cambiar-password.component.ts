import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { SnackBarService } from '@services/snackbar.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss']
})
export class CambiarPasswordComponent implements OnInit {

  minimoCaracteres: number = 6;

  contrasenasSonIguales : boolean = false;
  verContrasena : boolean = false;

  deshabilitarBotones: boolean = false;

  contrasena = new FormControl('' ,  [Validators.required, Validators.minLength(this.minimoCaracteres)])
  repetirContrasena = new FormControl('' , [Validators.required])

  constructor(
    private authService: AuthService,
    private snackBar: SnackBarService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  cambiarPassword(){
    if(this.contrasena.value){
      this.deshabilitarBotones = true;
      this.authService.cambiarContrasena(this.contrasena.value).subscribe((res)=>{
        if(res.status == 'ok'){
          this.snackBar.success('Cambió su contraseña con éxito.');
          setTimeout(()=>{
            this.router.navigate([''])
            this.deshabilitarBotones = false;
          }, this.snackBar.duracionDefault / 2)

        }else if (res.status =='error'){
          this.snackBar.error('Ha ocurrido un error.')
          this.deshabilitarBotones = false;
        }
      })
    }
  }

  compararContrasenas(){
    this.contrasenasSonIguales = (this.contrasena.value == this.repetirContrasena.value)
    console.log(this.repetirContrasena)
  }

  get camposValidos(){
    return (this.contrasena.valid && this.repetirContrasena.valid);
  }
  get contrasenasSeParecen(){
    return (this.contrasena.value?.startsWith(this.repetirContrasena.value!));
  }

}

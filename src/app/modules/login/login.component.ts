import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { TITLE } from 'brand/const';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  title = TITLE;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['',  [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    if(this.loginForm.valid){
      this.authService.login(this.formEmail?.value, this.formContrasena?.value).subscribe((res)=>{
        if(res.status == 'ok'){
          this.router.navigate(['']);
        }
      })
    }
  }

  get formEmail() {return this.loginForm.get('email')}
  get formContrasena() {return this.loginForm.get('contrasena')}

}

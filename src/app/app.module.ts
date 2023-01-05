import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/es-AR';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginModule } from './modules/login/login.module';
import { MainModule } from './modules/main/main.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ResponseErrorsInterceptor } from './interceptors/response-errors.interceptor';
import { RequestHeadersInterceptor } from './interceptors/request-headers.interceptor';
import { APP_INITIALIZER } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

registerLocaleData(locale);

export function initApp(authService: AuthService) {
  return () => authService.inicializarAplicacion()
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    MainModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'es-AR' },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseErrorsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestHeadersInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: initApp, multi: true, deps: [AuthService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

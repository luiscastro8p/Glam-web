import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//servicios
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/shared/login/login.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { RegistroComponent } from './componentes/shared/registro/registro.component';
import { ForgotPasswordComponent } from './componentes/shared/forgot-password/forgot-password.component';
import { PerfilComponent } from './componentes/shared/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

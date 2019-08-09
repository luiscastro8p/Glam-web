import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//servicios
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ForgotPasswordComponent } from './componentes/forgot-password/forgot-password.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuariosComponent } from './componentes/Lista-Usuarios/lista-usuarios.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';

//map
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    PerfilComponent,
    ListaUsuariosComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule,
     HttpClientModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

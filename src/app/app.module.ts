import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//servicios
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
//navbar
import { TopNavbarComponent } from './componentes/top-navbar/top-navbar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import { ListaUsuariosComponent } from './componentes/Lista-Usuarios/lista-usuarios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ForgotPasswordComponent } from './componentes/forgot-password/forgot-password.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';

//map
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { RegistroEstilistaComponent } from './componentes/registro-estilista/registro-estilista.component';
import { ListaEstilistasComponent } from './componentes/lista-estilistas/lista-estilistas.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    PerfilComponent,
    ListaUsuariosComponent,
    RegistroUsuarioComponent,
    TopNavbarComponent,
    RegistroEstilistaComponent,
    ListaEstilistasComponent,
    
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule,
     HttpClientModule,
     NgbModule,
     RouterModule,
     BrowserModule,
     FormsModule,
     ReactiveFormsModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

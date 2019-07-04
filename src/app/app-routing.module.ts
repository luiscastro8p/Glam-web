import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { LoginComponent } from './componentes/shared/login/login.component';
import { RegistroComponent } from './componentes/shared/registro/registro.component';
import { ForgotPasswordComponent } from './componentes/shared/forgot-password/forgot-password.component';
import { PerfilComponent } from './componentes/shared/perfil/perfil.component';

const routes: Routes = [
  { path:'home', component: NavbarComponent },
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent },
  { path:'olvidaste-contraseña', component: ForgotPasswordComponent },
  { path:'perfil', component: PerfilComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

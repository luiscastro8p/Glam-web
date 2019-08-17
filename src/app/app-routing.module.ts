import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ForgotPasswordComponent } from './componentes/forgot-password/forgot-password.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { ListaUsuariosComponent } from './componentes/Lista-Usuarios/lista-usuarios.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { TopNavbarComponent } from './componentes/top-navbar/top-navbar.component';
import { BasicLayoutComponent } from './componentes/layouts/basicLayout.component';


const routes: Routes = [
  { path:'home', component: NavbarComponent, canActivate: [ AuthGuard ] },
  { path:'top-navbar', component: TopNavbarComponent },
  { path:'login', component: LoginComponent },
  { path:'registro', component: RegistroComponent },
  { path:'olvidaste-contraseña', component: ForgotPasswordComponent },
  { path:'perfil', component: PerfilComponent },
  { path:'lista-usuario', component: ListaUsuariosComponent },
  { path:'registro-usuario/:id', component: RegistroUsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import { RegistroModel } from '../../models/registro-Model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: RegistroModel[] =[];

  constructor ( private RegistroUsuarioService: RegistroUsuarioService) { }

  ngOnInit() {
    this.RegistroUsuarioService.getUsuario()
    .subscribe( resp => this.usuarios = resp);
      
    }
  }



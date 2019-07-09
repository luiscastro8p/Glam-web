import { Component, OnInit } from '@angular/core';
import { Users } from '../../shared/interfaces/users';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Users [] = [
    {
     nombre:'luis ',
     apellido:'castro',
     telefono: 2,
     
    },
  ]

  constructor() { }

  ngOnInit() {
  }



}

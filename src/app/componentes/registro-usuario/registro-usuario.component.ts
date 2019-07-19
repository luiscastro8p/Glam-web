import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css' ]
})
export class RegistroUsuarioComponent implements OnInit {


  usuario:Object = {
    nombre:"null",
    tipo:"null",
    email: "null"
  }
  constructor() { }

  ngOnInit() {
  }
  
  guardar( forma:NgForm ){
    console.log("Formulario posteado");
    console.log(forma);
    
    
  }
}

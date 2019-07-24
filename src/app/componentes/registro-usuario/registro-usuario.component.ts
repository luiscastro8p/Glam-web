import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegistroModel } from '../../models/registro-Model';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css' ]
})
export class RegistroUsuarioComponent implements OnInit {


   
   registro: RegistroModel = new RegistroModel();  

  constructor() { }

  ngOnInit() {
  }
  
  guardar( forma:NgForm ){
    
    console.log(forma);
    console.log(this.registro);
    
        
  }
}

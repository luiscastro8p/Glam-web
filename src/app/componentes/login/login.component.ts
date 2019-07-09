import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuarioModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   usuario:UsuarioModel = new UsuarioModel;
  
   constructor(private  auth:AuthService) { }

  ngOnInit() {
  }


  login( form: NgForm){
 
    if( form.invalid){
  return;
    }

    this.auth.login(this.usuario)
    .subscribe( resp=> {
      console.log(resp);
    
    },(err) => {
      console.log(err.error.error.message);

    });


    // console.log(this.usuario);
    //   console.log('imprimir si el formulario es valido');
    //   console.log(form);

  }
}

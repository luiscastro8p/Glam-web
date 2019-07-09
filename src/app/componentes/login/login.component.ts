import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuarioModel';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   usuario:UsuarioModel = new UsuarioModel;
  
   constructor(private  auth:AuthService,
                private router:Router) { }

  ngOnInit() {
  }


  login( form: NgForm){
 
    if( form.invalid){
      return;
    }

    Swal.fire({
      allowOutsideClick:false,
      type: 'info',
      text:'Espere por favor...'
    });
    Swal.showLoading();



    this.auth.login(this.usuario)
    .subscribe( resp=> {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');
    
    },(err) => {
      console.log(err.error.error.message);
      Swal.fire({
        
        type: 'error',
        title:'Error al autenticar',
        text: err.error.error.message
      });
    });


    // console.log(this.usuario);
    //   console.log('imprimir si el formulario es valido');
    //   console.log(form);

  }
}

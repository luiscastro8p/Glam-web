import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegistroModel } from '../../models/registro-Model';
import { ActivatedRoute } from '@angular/router';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css' ]
})
export class RegistroUsuarioComponent implements OnInit {


   
   registro: RegistroModel = new RegistroModel();  

  constructor(private registroService:RegistroUsuarioService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    
    if( id !== 'nuevo'){
      this.registroService.getUsuarioid( id )
      .subscribe( resp => {
        console.log(resp);
        
      });
    }
  }
  
  guardar( forma:NgForm ){
    
    // console.log(forma);
    // console.log(this.registro);

    if(forma.invalid){
      console.log('formulario no valido');
      return;
    }
    
    Swal.fire({
      title:'Espere',
      text:'Guardar informacion',
      type:'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

      let peticion: Observable<any>;


      if( this.registro.id ){
        peticion = this.registroService.actualizarUsuario( this.registro );
       
        
      
      }else{

        peticion = this.registroService.crearUsuario( this.registro );
        // .subscribe (resp => {
        // console.log(resp);
        // this.registro = resp;
        
      // });
      }
      peticion.subscribe( resp =>{
        Swal.fire({
          title:this.registro.nombre,
          text: 'Se actualizo correctamente',
          type: "success"
        })
      } )
    
  
  }
}

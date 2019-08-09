import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegistroModel } from '../../models/registro-Model';
import { ActivatedRoute } from '@angular/router';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Marcador } from '../../clases/marcador.class';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css' ]
})
export class RegistroUsuarioComponent implements OnInit {

  lat: number = 24.8078299;
  lng: number = -107.3979137;
  otro = false;
  
   registro: RegistroModel = new RegistroModel(  );  
   marcadores: Marcador[] =  [];
  
  
  constructor(private registroService:RegistroUsuarioService,
              private route:ActivatedRoute) {

                const nuevoMarcador = new Marcador( 0,0 );
                
                this.marcadores.push (nuevoMarcador);
               }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    
    if( id !== 'nuevo'){
      this.registroService.getUsuarioid( id )
      .subscribe( (resp:RegistroModel) => {
        this.registro = resp;
        this.registro.id = id;
        console.log(resp);
        
      });
    }
  }

  agregarmarcador(evento){
    const coords:{ lat:number,lng:number } = evento.coords;
    
    const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.marcadores.push(nuevoMarcador);
      
    console.log(evento.coords);

    

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
        //  .subscribe (resp => {
        // console.log(resp);
        //  this.registro = resp;
        
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

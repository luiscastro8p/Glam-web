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
  public latUser: any
  public lngUser:any
  
   registro: RegistroModel = new RegistroModel(  );  
   marcadores: Marcador[] =  [];
   public nuevoMarcador = new Marcador(this.lat ,this.lng );
  
  constructor(private registroService:RegistroUsuarioService,
              private route:ActivatedRoute) {
                this.marcadores.push (this.nuevoMarcador);
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
    this.nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.latUser= coords.lat
    this.lngUser = coords.lng
    this.marcadores = [];
    this.marcadores.push(this.nuevoMarcador); 
    console.log(evento.coords);
     
  }
  
  coordenadas(){
    //  var Texto :number= this.nuevoMarcador.lat;
    // (<HTMLInputElement>document.getElementById("lat")).value = Texto.toString();
    // var Texto2 :number= this.nuevoMarcador.lng;
    // (<HTMLInputElement>document.getElementById("lng")).value = Texto2.toString();
    console.log(this.latUser,this.lngUser)
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

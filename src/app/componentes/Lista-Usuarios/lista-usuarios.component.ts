import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';
import { RegistroModel } from '../../models/registro-Model';
import Swal from 'sweetalert2';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMapaComponent } from '../modal-mapa/modal-mapa.component';










@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [NgbModalConfig, NgbModal]
})


export class ListaUsuariosComponent implements OnInit  {

  lat: number = 24.8078299;
  lng: number = -107.3979137;
  



  mostrarRegistro:boolean = false;

  usuarios: RegistroModel[] =[];
  

  
  cargando = false;
  

  constructor ( private RegistroUsuarioService: RegistroUsuarioService,private modal:NgbModal,config:NgbModalConfig) { }

  abrirmodal(content){
    console.log("error");
    this.modal.open(content);
    
  }
  ngOnInit() {
   
    this.cargando = true;
    this.RegistroUsuarioService.getUsuario()
    .subscribe( resp => {
      this.usuarios = resp;
      this.cargando = false;
      
    });
      
    }

    

    borrarUsuario( registro: RegistroModel, i:number){

      Swal.fire({
        title:'¿Está seguro?',
        text: ` Esta seguro que desea boorar a ${registro.nombre}`,
        type:'question',
        showConfirmButton:true,
        showCancelButton:true
      }).then( resp => {
        if( resp.value){

          this.usuarios.splice( i, 1);
          this.RegistroUsuarioService.borrarUsuario( registro.id )
          .subscribe();
        }
      })


    }
  }



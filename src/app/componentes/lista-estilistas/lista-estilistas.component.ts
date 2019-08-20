import { Component, OnInit } from '@angular/core';
import { RegistroEstilistaService } from '../../services/registro-estilista.service';
import { RegistroEstilista } from '../../models/registro-estilista-Model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-estilistas',
  templateUrl: './lista-estilistas.component.html',
  styleUrls: ['./lista-estilistas.component.css']
})
export class ListaEstilistasComponent implements OnInit {
    estilista: RegistroEstilista[]=[];

  constructor( private estilistaService:RegistroEstilistaService ) { }

  ngOnInit() {
   
    this.estilistaService.getEstilista()
    .subscribe( resp => {
     console.log(resp);
     this.estilista = resp;
     
      
    });
  }
  borrarUsuario( estilista: RegistroEstilista, i:number){

    Swal.fire({
      title:'¿Está seguro?',
    text: ` Esta seguro que desea boorar a ${estilista.nombre}`,
      type:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {
      if( resp.value){

        this.estilista.splice( i, 1);
        this.estilistaService.borrarUsuario( estilista.id )
        .subscribe();
      }
    })
  }

}

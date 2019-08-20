import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroEstilista } from '../../models/registro-estilista-Model';
import { RegistroEstilistaService } from '../../services/registro-estilista.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro-estilista',
  templateUrl: './registro-estilista.component.html',
  styleUrls: ['./registro-estilista.component.css']
})

export class RegistroEstilistaComponent implements OnInit {
 
  estilista: RegistroEstilista = new RegistroEstilista();


  constructor( private estilistaService:RegistroEstilistaService,
                private route: ActivatedRoute ) {
    
  }

  ngOnInit() {  
      
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.estilistaService.getEstilistaid(id)
        .subscribe((resp:RegistroEstilista) => {
          this.estilista = resp;
          this.estilista.id = id;
          
          console.log(resp);
        });
    }
  }
  guardar(forma:NgForm){
    if(forma.invalid){
      console.log('formulario no valido');
      
    }
  
    Swal.fire({
      title: 'Espere',
      text: 'Guardar informacion',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    if (this.estilista.id) {
      peticion =  this.estilistaService.actualizarEstilista(this.estilista);
    }else{
      peticion =  this.estilistaService.crearEstilista(this.estilista);
    }

    peticion.subscribe(res =>{
      Swal.fire({
        title: this.estilista.nombre,
        text: 'Se actualizo correctamente',
        type: "success"
      });
    })
      
      
     
  // console.log(forma);
  // console.log(this.estilista);


  }


  

}

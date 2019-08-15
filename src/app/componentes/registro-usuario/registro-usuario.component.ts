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
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  lat: number = 24.8078299;
  lng: number = -107.3979137;
  otro = false;
  public latUser: any
  public lngUser: any

  registro: RegistroModel = new RegistroModel();
  marcadores: Marcador[] = [];
  public nuevoMarcador = new Marcador(this.lat, this.lng);

  constructor(private registroService: RegistroUsuarioService,
    private route: ActivatedRoute) {
    this.marcadores.push(this.nuevoMarcador);
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.registroService.getUsuarioid(id)
        .subscribe((resp) => {
          console.log(resp);
        });
    }

  }

  agregarmarcador(evento) {
    const coords: { lat: number, lng: number } = evento.coords;
    this.nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.registro.lat = coords.lat
    this.registro.lng = coords.lng
    this.marcadores = [];
    this.marcadores.push(this.nuevoMarcador);
    console.log(evento.coords);

  }

  coordenadas() {
    console.log(this.latUser, this.lngUser)
  }

  guardar(forma: NgForm) {

    if (forma.invalid) {
      console.log('formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardar informacion',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if (this.registro.id) {
      this.registroService.actualizarUsuario(this.registro).subscribe(res => {
        console.log(res)
        Swal.fire({
          title: this.registro.nombre,
          text: 'Se actualizo correctamente',
          type: "success"
        })
      });
    } else {
      this.registroService.crearUsuario(this.registro).subscribe(res => {
        console.log(res)
        Swal.fire({
          title: this.registro.nombre,
          text: 'Se actualizo correctamente',
          type: "success"
        })
      });
    }
  }
}

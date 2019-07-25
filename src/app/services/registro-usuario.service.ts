import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroModel } from '../models/registro-Model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  private url = "https://login-glam.firebaseio.com"  

  constructor( private http:HttpClient ) { }


  crearUsuario( usuario: RegistroModel ){
    
    return this.http.post( `${this.url }/usuarios.json`, usuario )
          .pipe(
            map( (resp:any) => {
              usuario.id = resp.name;
              return usuario;
            })
          );
    
  }
  actualizarUsuario( usuario: RegistroModel ){
    
    const usuarioTemp = {
      ...usuario
    };

    delete usuarioTemp.id;
    return this.http.put(`${ this.url }/usuarios/${usuario.id} `, usuarioTemp )
  }


  getUsuarioid( id:string ){
    return this.http.get ( `${ this.url }/usuarios/${ id }.json`)

  }

  getUsuario(){
    return this.http.get(`${ this.url }/usuarios.json`)
    .pipe(
      map( resp =>  this.crearArreglo(resp) )
    );
  }

  private crearArreglo ( usuarioObj:object){
   const usuarios:RegistroModel[] = [];

   if(usuarioObj == null ){
     return [];
   }else{
   Object.keys ( usuarioObj ).forEach( key => {
     const usuario:RegistroModel = usuarioObj[key];
     usuario.id = key;
     usuarios.push(usuario);
    });

  }
    return usuarios;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroEstilista } from '../models/registro-estilista-Model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroEstilistaService {

  private url = "https://login-glam.firebaseio.com"

  constructor( private http: HttpClient ) { }

  crearEstilista(estilista:RegistroEstilista) {

    return this.http.post(`${this.url}/estilistas.json`, estilista)
      .pipe(
        map((resp: any) => {
          estilista.id = resp.name;
          return estilista;
        })
      );
  }
  actualizarEstilista(estilista:RegistroEstilista) {

    const estilistaTemp = {
      ...estilista
    };

    delete estilistaTemp.id;
    return this.http.put(`${this.url}/usuarios/${estilista.id}.json `, estilistaTemp)
  }

  getEstilista() {
    return this.http.get(`${this.url}/estilistas.json`)
    .pipe(
      map(resp => this.creararreglo(resp)),
      delay(500)
    );
  }
  
  getEstilistaid(id: string) {
    return this.http.get(`${this.url}/estilistas/${id}.json`)
  }
  
  private creararreglo(estilistasObj:object){
    const estilista:RegistroEstilista[] =[];
    console.log(estilista);
    if (estilistasObj == null) {
      return [];
    } else {
      Object.keys(estilistasObj).forEach(key => {
        const esti: RegistroEstilista = estilistasObj[key];
        esti.id = key;
        estilista.push(esti);
      });
    }
    
    return estilista;
  }
  borrarUsuario(id: string) {
    return this.http.delete(`${this.url}/estilistas/${id}.json`);
  }


}

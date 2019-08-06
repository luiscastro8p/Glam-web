import { Time } from '@angular/common';

export class RegistroModel {
   id:string;
   email:string;
   nombre:string;
//    fecha:string;
   Ncomercial:string;
   hapertura:Time;
   hcierre:Time;
   tipo:string;
   status:boolean;
   otro:string;
   rsocial:string;

   constructor(){
       this.status = false;
   }
}
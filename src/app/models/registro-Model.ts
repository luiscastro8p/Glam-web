export class RegistroModel {
   id:string;
   email:string;
   nombre:string;
//    fecha:string;
   tipo:string;
   status:boolean; 

   constructor(){
       this.status = false;
   }
}
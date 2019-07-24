export class RegistroModel {
   email:string;
   nombre:string;
   fecha:string;
   tipo:string;
   status:boolean; 

   constructor(){
       this.status = false;
   }
}
export class RegistroEstilista {
    id:string;
    nombre:string;
    especialidad:string;
    foto:File;
    url:string;
    status:boolean;
    servicios:String;
   
 
    constructor( ){
       this.status = false;
    }
    
 }
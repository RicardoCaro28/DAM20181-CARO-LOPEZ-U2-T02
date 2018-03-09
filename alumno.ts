export class Alumno{
    control: string;
    nombre:string;
    apellido:string;
    promedio:number;
    genero:string;
    fecha:string;
    activo:boolean;
    lista:Array<Alumno>;

constructor(theControl:string,theNombre:string,
    theApellido:string,thePromedio:number,
    theGenero:string,theFecha:string,theActivo:boolean){
    
    this.control = theControl;    
    this.nombre = theNombre;
    this.apellido = theApellido;
    this.promedio= thePromedio;
    this.genero=theGenero;
    this.fecha=theFecha;
    this.activo = theActivo;
}//constructor


}//clase





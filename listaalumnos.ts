import { Alumno } from "./alumno";

var catalogo = Array<Alumno>();

var alumno1 = new Alumno("13400395","Ricardo","caro",
89,"Masculino","Octubre",true);

var alumno2 = new Alumno("13400200","Jose","Madero",
80,"Masculino","Noviembre",true);

var alumno3 = new Alumno("13400100","Zack","Snyder",
95,"Masculino","Diciembre",true);


function agregar(alum:Alumno):void{

    catalogo.push(alum);
     //console.log(catalogo);
}



console.log("----------------ALUMNOS------------------");
//console.log(catalogo); 

function mostrar():void{
    
   catalogo.forEach(element => {
       console.log(element);
   });
}

//mostrar();


function eliminar(numcontrol:string):void{
  let cont = 0;
  for(let bus of catalogo){
      if(bus.control==numcontrol){
          catalogo.splice(cont,1);
      }
      cont++;
  } 
  console.log(catalogo);
}


function actualizar(numcontrol:string,nom:string):void{
    for (let index = 0; index < catalogo.length; index++) {
        if(catalogo[index].control=numcontrol){
            catalogo[index].nombre=nom;
        }
        
    }
    console.log(catalogo);
}

agregar(alumno1);
agregar(alumno2);
agregar(alumno3);
//actualizar("13400200","Nolan");
eliminar("13400100");

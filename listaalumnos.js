"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var catalogo = Array();
var alumno1 = new alumno_1.Alumno("13400395", "Ricardo", "caro", 89, "Masculino", "Octubre", true);
var alumno2 = new alumno_1.Alumno("13400200", "Jose", "Madero", 80, "Masculino", "Noviembre", true);
var alumno3 = new alumno_1.Alumno("13400100", "Zack", "Snyder", 95, "Masculino", "Diciembre", true);
function agregar(alum) {
    catalogo.push(alum);
    //console.log(catalogo);
}
console.log("----------------ALUMNOS------------------");
//console.log(catalogo); 
function mostrar() {
    catalogo.forEach(function (element) {
        console.log(element);
    });
}
//mostrar();
function eliminar(numcontrol) {
    var cont = 0;
    for (var _i = 0, catalogo_1 = catalogo; _i < catalogo_1.length; _i++) {
        var bus = catalogo_1[_i];
        if (bus.control == numcontrol) {
            catalogo.splice(cont, 1);
        }
        cont++;
    }
    console.log(catalogo);
}
function actualizar(numcontrol, nom) {
    for (var index = 0; index < catalogo.length; index++) {
        if (catalogo[index].control = numcontrol) {
            catalogo[index].nombre = nom;
        }
    }
    console.log(catalogo);
}
agregar(alumno1);
agregar(alumno2);
agregar(alumno3);
//actualizar("13400200","Nolan");
eliminar("13400100");

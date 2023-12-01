//Idea: un simulador de app para gimnasios, que permita loguearse, inscribirse en clases, lleve la asistencia de los alumnos y recuerde cuando se vencen los abonos.
//Lo que sigue es un algoritmo que permita cargar los datos de un alumno, su plan, el peso que levanto en un test de fuerza máxima; y devuelva los datos ordenados, el monto a abonar por ese plan y el peso que tiene que levantar ese día en funcion del porcentaje que desea utilizar.
let salir="no";
do{
let nombre= prompt("Ingrese nombre del alumno");
let apellido= prompt("Ingrese apellido del alumno");
let nombreCompleto= nombre + " " + apellido;
let plan = prompt("Indica si tu plan es 'Funcional', 'Gimnasio, 'Deportivo o  'Full'").toLowerCase();


function montoAbono(){
    //Funcion para calcular el monto a abonar
    switch(plan){
        case "funcional":
            return 10500;
        case "gimnasio":
            return 8500;            
        case "deportivo":
            return 12500;            
        case "full":
            return 20000;            
        default:
            return undefined;
    }

}
function calcularPeso(){
    let repMax= parseInt(prompt("Ingrese el peso de su test de repeticion máxima (kg)"));
    let porcentaje=parseInt(prompt("Ingrese el porcentaje con el que desea trabajar hoy"));
    let peso=(repMax*porcentaje)/100;
    return peso;
}

console.log("El alumno ingresado es: " + nombreCompleto);
console.log("El plan al que esta inscripto es: " + plan);
console.log("El monton a abonar por este plan es: $" + montoAbono());
console.log("Hoy debe trabajar con un peso de " + calcularPeso() + "kg en el ejercicio elegido");
salir=prompt("¿Desea salir?").toLowerCase();

} while (salir=="no")
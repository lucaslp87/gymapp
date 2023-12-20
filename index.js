//Habiendo hecho las clases de DOM y eventos entiendo que hay mil maneras de hacer esto mas eficiente y lindo esteticamente, pero creo que igual asi cumple las condiciones necesarias
function Alumno(){
    this.nombre= prompt("Ingrese el nombre del alumno");
    this.apellido= prompt("Ingrese el apellido del alumno");
    this.dni=prompt("Ingrese el dni del alumno");
    this.plan= prompt("Ingrese el plan: 'Funcional', 'Gimnasio, 'Deportivo o  'Full'");
    this.debe="no";
    this.rmSentadilla=null;
    this.rmPressPlano=null;
    this.rmPressMilitar=null;
    this.rmPesoMuerto=null;
    this.actualizarMarcas = function() {
        
        let ejercicio = prompt("Ingrese el ejercicio del cual quiere actualizar la marca: 'sentadilla', 'press plano', 'press militar', 'peso muerto'").toLocaleLowerCase();
        let nuevaMarca = parseFloat(prompt("Ingrese la nueva marca:"));
        switch (ejercicio) {
            case 'sentadilla':
                this.rmSentadilla = nuevaMarca;
                break;
            case 'press plano':
                this.rmPressPlano = nuevaMarca;s
                break;
            case 'press militar':
                this.rmPressMilitar = nuevaMarca;
                break;
            case 'peso muerto':
                this.rmPesoMuerto = nuevaMarca;
                break;
            default:
                console.log("Ejercicio no reconocido");
        }
    };
}
let alumnos=[];
let continuar=true;
let opcion;

do{
    opcion=prompt("Ingrese 'cargar' para crear un nuevo alumno, 'consultar' para obtener todos sus datos, o ingrese 'salir' para finalizar").toLocaleLowerCase();

    switch(opcion){
        case 'cargar':
            
            alumnos.push(new Alumno());
            console.log('Alumno cargado correctamente! La cantidad de alumnos ahora es de ' + alumnos.length +'.' )
            let imprimir;
            do{
                imprimir=prompt("¿Desea imprimir el listado de alumnos hasta el momento?(Si/No)").toLocaleLowerCase();
            }while(imprimir!='si' && imprimir!='no')
            if(imprimir==='si'){
                for(let alumno of alumnos){
                    console.log(alumno);
                    }
                break;
            }else if(imprimir==='no'){
                break;
            }
            

        case 'consultar':
            
                let dniBuscado = prompt("Ingrese el dni del alumno que desea consultar");
                let indiceBuscado = alumnos.findIndex(alumno => alumno.dni === dniBuscado);

                if (indiceBuscado!=-1) {
                    console.log("Nombre: "+ alumnos[indiceBuscado].nombre);
                    console.log("Apellido: "+ alumnos[indiceBuscado].apellido);
                    console.log("DNI: "+ alumnos[indiceBuscado].dni);
                    console.log("1RM en sentadilla: "+ alumnos[indiceBuscado].rmSentadilla);
                    console.log("1RM en press plano: "+ alumnos[indiceBuscado].rmPressPlano);
                    console.log("1RM en press militar: "+ alumnos[indiceBuscado].rmPressMilitar);
                    console.log("1RM en peso muerto: "+ alumnos[indiceBuscado].rmPesoMuerto);
                } else {
                    console.log("No se encontró al alumno");
                }
                let deseo=prompt("¿Desea cargar una nueva marca?(Si/No)").toLocaleLowerCase();
                    do{
                        
                        alumnos[indiceBuscado].actualizarMarcas();
                        console.log("Marca actualizada correctamente.");
                        console.log("Nombre: "+ alumnos[indiceBuscado].nombre);
                        console.log("Apellido: "+ alumnos[indiceBuscado].apellido);
                        console.log("DNI: "+ alumnos[indiceBuscado].dni);
                        console.log("1RM en sentadilla: "+ alumnos[indiceBuscado].rmSentadilla);
                        console.log("1RM en press plano: "+ alumnos[indiceBuscado].rmPressPlano);
                        console.log("1RM en press militar: "+ alumnos[indiceBuscado].rmPressMilitar);
                        console.log("1RM en peso mnuerto"+ alumnos[indiceBuscado].rmPesoMuerto);

                        deseo=prompt("¿Desea cargar una nueva marca?(Si/No)").toLocaleLowerCase();

                    }while(deseo==='si')
                if(deseo==='no'){
                    break;
                } else{
                    deseo=prompt("Respuesta incorrecta. Ingrese 'si' o 'no'");

                }                                   
        case 'salir':
            continuar=false;
            break;
        default:
            alert("Ingresó un valor incorrecto");
            break;
            
    }
}while (continuar);
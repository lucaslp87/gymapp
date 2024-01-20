import { panel1RMHTML, panelCargaHTML, panelConsultaHTML, panelOpc1RMHTML, panelPpalHTML } from "./elements/innerHTML.js";
import { Alumno } from "./elements/class.js";

let alumnos=[];

let panel=document.querySelector("#panel");
let cargar=document.querySelector("#cargar");
let consultar=document.querySelector("#consultar");
let nuevoRM=document.querySelector("#nuevo-rm");
let cerrarSesionLink=document.querySelector("#cerrarSesionLink");
 
function guardarAlumnosEnLocalStorage() {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

function mostrarPanelCarga(){
    panel.innerHTML=panelCargaHTML;
    
    let form=document.querySelector("#form-carga");
    let volver=document.querySelector("#volver");
    
    let alumnoACargar={ 
        nombre:"", 
        apellido:"",
        dni:"",   
        plan:""
    }

    form.addEventListener("input", (event)=>{
            alumnoACargar[event.target.name] = event.target.value;
        })
    
    form.addEventListener("submit", (event)=>{
        
        event.preventDefault();
        if(alumnoACargar){
            alumnos.push(new Alumno(alumnoACargar.nombre, alumnoACargar.apellido, alumnoACargar.dni, alumnoACargar.plan));
            Swal.fire({
                title: "",
                text: 'Alumno cargado correctamente! La cantidad de alumnos ahora es de ' + alumnos.length +'.',
                icon: "success",
                heightAuto: false
            });
            form.reset();

            guardarAlumnosEnLocalStorage();
        }
        })
    volver.addEventListener("click", mostrarPanelPrincipal);
    
}

function mostrarPanelConsulta(){

    panel.innerHTML=panelConsultaHTML;
    
    let form=document.querySelector("#form-consulta");
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value;   
        let alumnoEncontrado=(alumnos.find((el)=>el.dni===dniBuscado))
        if (alumnoEncontrado!=undefined){
            Swal.fire({
                title: "",
                text: JSON.stringify(alumnoEncontrado),
                icon: "",
                heightAuto: false
            });
            alumnoEncontrado.debe && alert("El alumno tiene deuda pendiente");
            //hacer aparecer un cartel con la info del alumno mas adelante;
        }else{
            Swal.fire({
                title: "",
                text: 'El DNI no coincide con niguno de los alumnos cargados en el sistema',
                icon: "error",
                heightAuto: false
            });
            form.reset();
        };           
    });

    volver.addEventListener("click", mostrarPanelPrincipal);
}

function mostrarPanelRM(){
    
    panel.innerHTML=panel1RMHTML;

    let form=document.querySelector("#form-rm"); 
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value;
        let alumnoEncontrado=(alumnos.find((el)=>el.dni===dniBuscado))
        if(alumnoEncontrado!=undefined){          
            panel.innerHTML=panelOpc1RMHTML;
            
            volver=document.querySelector("#volver");
            form=document.querySelector("#form-lista");
            let lista=document.querySelector(".lista");
            let kg=document.querySelector("#kg");    
            form.addEventListener("submit", (event)=>{
                event.preventDefault();
                let index=alumnos.findIndex((el)=> dniBuscado===el.dni);
                let opcion=lista.value;
                alumnos[index].rms[opcion]= parseFloat(kg.value);
                Swal.fire({
                    title: "",
                    text: `El nuevo 1RM en ${opcion} del alumno ${alumnos[index].nombre + " " + alumnos[index].apellido} es de ${kg.value} kg.`,
                    icon: "success",
                    heightAuto: false
                });
                form.reset();
            })
        }else{
            Swal.fire({
            title: "",
            text: 'El DNI no coincide con niguno de los alumnos cargados en el sistema',
            icon: "error",
            heightAuto: false
        });
            form.reset();
        }
        volver.addEventListener("click", mostrarPanelRM);

    });

    volver.addEventListener("click", mostrarPanelPrincipal);

}

function mostrarPanelPrincipal(){
    const alumnosLocalStorage = localStorage.getItem('alumnos');
    alumnosLocalStorage && (alumnos = JSON.parse(alumnosLocalStorage));

    panel.innerHTML=panelPpalHTML;
    cargar=document.querySelector("#cargar");
    consultar=document.querySelector("#consultar");
    nuevoRM=document.querySelector("#nuevo-rm");
    cerrarSesionLink=document.querySelector("#cerrarSesionLink");


    cargar.addEventListener("click", mostrarPanelCarga);
    consultar.addEventListener("click", mostrarPanelConsulta);
    nuevoRM.addEventListener("click", mostrarPanelRM);
    cerrarSesionLink.addEventListener("click", redirectToLogin);

}

function redirectToLogin(){
    localStorage.removeItem("isLog");
    window.location.href="./login.html";
}
cargar.addEventListener("click", mostrarPanelCarga);

consultar.addEventListener("click", mostrarPanelConsulta);

nuevoRM.addEventListener("click", mostrarPanelRM);

cerrarSesionLink.addEventListener("click", redirectToLogin);
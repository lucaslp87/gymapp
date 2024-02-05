import { panel1RMHTML, panelCargaHTML, panelConsultaHTML, panelOpc1RMHTML, panelPrincipalHTML } from "./elements/innerHTML.js";
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

function cargarAlumnosLocalStorage(){
    let alumnosLocalStorage = localStorage.getItem('alumnos');
    alumnosLocalStorage && (alumnos = JSON.parse(alumnosLocalStorage));
}

async function devolverListaAlumnos(){
    let listaAlumnos=[]
    await fetch('../js/elements/data.json')
    .then((response)=>response.json())
    .then((data)=>{ 
        listaAlumnos = data.alumnos;
        });
    return listaAlumnos;
}
async function mostrarPanelAlumnos(){
    let panelAlumnosHTML=``;
    (await devolverListaAlumnos()).forEach(a => {
        panelAlumnosHTML+=`
        <div class="alumno-card">
            <h3>${a.nombre} ${a.apellido}</h3>
            <p><b>DNI:</b> ${a.dni}</p>
            <p><b>Plan:</b> ${a.plan}</p>
            <p><b>Sentadilla RM:</b> ${a.rms.sentadilla || 'Sin datos'}</p>
            <p><b>Press Plano RM:</b> ${a.rms.pressPlano || 'Sin datos'}</p>
            <p><b>Press Militar RM:</b> ${a.rms.pressMilitar || 'Sin datos'}</p>
            <p><b>Peso Muerto RM:</b> ${a.rms.pesoMuerto || 'Sin datos'}</p>
        </div>`;
    })

    alumnos.forEach((a) => {
        panelAlumnosHTML += `
            <div class="alumno-card">
                <h3>${a.nombre} ${a.apellido}</h3>
                <p><b>DNI:</b> ${a.dni}</p>
                <p><b>Plan:</b> ${a.plan}</p>
                <p><b>Sentadilla RM:</b> ${a.rms.sentadilla || 'Sin datos'}</p>
                <p><b>Press Plano RM:</b> ${a.rms.pressPlano || 'Sin datos'}</p>
                <p><b>Press Militar RM:</b> ${a.rms.pressMilitar || 'Sin datos'}</p>
                <p><b>Peso Muerto RM:</b> ${a.rms.pesoMuerto || 'Sin datos'}</p>
            </div>`;
    });

    panel.innerHTML = `
    <h2>Listado total de alumnos</h2>
    <div class="alumnos-container">    
        ${panelAlumnosHTML}
    </div>
    <div class="volver">
        <a href="#" id="volver">Volver</a></p>
    </div>
    `;


    let volver=document.querySelector("#volver")
    volver.addEventListener("click", mostrarPanelPrincipal);
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
            let lista = form.querySelector(".lista");
            let opcion = lista.value;
            alumnoACargar.plan=opcion;
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
    let btnTodo=document.querySelector("#btn-todo");
    
    form.addEventListener("submit", async (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value;   
        let alumnoEncontradoenArray = (alumnos.find((el)=>el.dni===dniBuscado));
        let alumnoEncontradoEnJSON = (await devolverListaAlumnos()).find((el)=>el.dni===dniBuscado);
        if (alumnoEncontradoenArray!=undefined || alumnoEncontradoEnJSON!=undefined){
            let alumnoEncontrado = alumnoEncontradoEnJSON || alumnoEncontradoenArray;
            Swal.fire({
                title: "",
                html: `${alumnoEncontrado.nombre} ${alumnoEncontrado.apellido} con DNI nº: ${alumnoEncontrado.dni} está inscripto/a al plan "${alumnoEncontrado.plan}".<br>
                Sus RMS registrados son:<br>
                - Sentadilla : ${alumnoEncontrado.rms.sentadilla || 'sin datos'} kg.<br>
                - Press plano : ${alumnoEncontrado.rms.pressPlano || 'sin datos'} kg.<br>
                - Press militar : ${alumnoEncontrado.rms.pressMilitar || 'sin datos'} kg.<br>
                - Peso muerto : ${alumnoEncontrado.rms.pesoMuerto || 'sin datos'} kg.`,
                icon: "",
                heightAuto: false
            });
            alumnoEncontrado.debe && alert("El alumno tiene deuda pendiente");
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

    btnTodo.addEventListener("click", mostrarPanelAlumnos);

    volver.addEventListener("click", mostrarPanelPrincipal);
}

function mostrarPanelRM(){
    //En esta función me gustaría poder modificar los rms de los alumnos del archivo 'data.json' pero no me deja hacer una peticion POST. Según chatGPT solo se puede hacer desde un servidor no local eso.
    panel.innerHTML=panel1RMHTML;

    let form=document.querySelector("#form-rm"); 
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", async (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value;   
        let alumnoEncontradoenArray = (alumnos.find((el)=>el.dni===dniBuscado));
        let alumnoEncontradoEnJSON = (await devolverListaAlumnos()).find((el)=>el.dni===dniBuscado);
        if (alumnoEncontradoenArray!=undefined || alumnoEncontradoEnJSON!=undefined){
            panel.innerHTML=panelOpc1RMHTML;
            
            volver=document.querySelector("#volver");
            form=document.querySelector("#form-lista");
            let lista=document.querySelector(".lista");
            let kg=document.querySelector("#kg");    
            form.addEventListener("submit", async (event)=>{
                event.preventDefault();
                let index = (alumnos.findIndex((el)=> dniBuscado===el.dni)) || ((await devolverListaAlumnos()).findIndex((el)=> dniBuscado===el.dni));
                let opcion = lista.value;
                alumnos[index].rms[opcion] = parseFloat(kg.value);
                Swal.fire({
                    title: "",
                    text: `El nuevo 1RM en ${opcion} del alumno ${alumnos[index].nombre + " " + alumnos[index].apellido} es de ${kg.value} kg.`,
                    icon: "success",
                    heightAuto: false
                });
                form.reset();
                guardarAlumnosEnLocalStorage();
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
    
    panel.innerHTML=panelPrincipalHTML;
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
    window.location.href="./pages/login.html";
}

let isLog=JSON.parse(localStorage.getItem("isLog"));
isLog || redirectToLogin();

cargar.addEventListener("click", mostrarPanelCarga);

consultar.addEventListener("click", mostrarPanelConsulta);

nuevoRM.addEventListener("click", mostrarPanelRM);

cerrarSesionLink.addEventListener("click", redirectToLogin);

cargarAlumnosLocalStorage();



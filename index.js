//Habiendo hecho las clases de DOM y eventos entiendo que hay mil maneras de hacer esto mas eficiente y lindo esteticamente, pero creo que igual asi cumple las condiciones necesarias
let alumnos=[];
let cargar=document.querySelector("#cargar");
let consultar=document.querySelector("#consultar");
let panel=document.querySelector("#panel");



class Alumno{
    constructor(nombre,apellido,dni,plan){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.plan=plan;
        this.debe=false;
        }
}

function mostrarPanelCarga(){
    panel.innerHTML=`

    <img src="./oro logo.png">

    <h1>CARGAR UN ALUMNO</h1>
        
    <h2>Complete el siguiente formulario</h2>

    <form class="formulario" id="form">
        
        <input type="text" name="nombre" class="menu-input" placeholder="Nombre"></input>
            
        <input type="text" name="apellido" class="menu-input" placeholder="Apellido"></input>
            
        <input type="number" name="dni" class="menu-input" placeholder="DNI"></input>
            
        <input type="text" name="plan" class="menu-input" placeholder="Plan"></input>
            
        <button type="submit" class="menu-button">Cargar</button>
        
        <button type="button" class="menu-button" id="volver">Volver</button>
    
    </form>
    `
    
    let form=document.querySelector("#form");
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
    
    form.addEventListener("submit", ()=>{
        
        event.preventDefault();
        alumnos.push(new Alumno(alumnoACargar.nombre, alumnoACargar.apellido, alumnoACargar.dni, alumnoACargar.plan));
        console.log('Alumno cargado correctamente! La cantidad de alumnos ahora es de ' + alumnos.length +'.' );
        })
    volver.addEventListener("click", mostrarPanelPrincipal);
    
}   

function mostrarPanelConsulta(){

    panel.innerHTML=`

    <img src="./oro logo.png">

    <h1>CONSULTAR UN ALUMNO</h1>
        
    <h2>Ingrese el DNI del alumno</h2>

    <form class="formulario" id="form">
                    
        <input type="number" name="dni" class="menu-input" placeholder="DNI"></input>
            
        <button type="submit" class="menu-button" id="buscar">Buscar</button>
        
        <button type="button" class="menu-button" id="volver">Volver</button>
    
    </form>
    `;
    
    let form=document.querySelector("#form"); 
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value ;   
        console.log(alumnos.find((el)=>el.dni===dniBuscado));           
    });

    volver.addEventListener("click", mostrarPanelPrincipal);
}

function mostrarPanelPrincipal(){
    panel.innerHTML=`
    <img src="./oro logo.png">
                
    <h1>BIENVENIDO/A</h1>
                
    <h2>Seleccione una opción</h2>
                
    <button class="menu-button" id="cargar">Cargar</button>

    <button class="menu-button" id="consultar">Consultar</button>

    <button class="menu-button" id="nuevo-rm">Nuevo RM</button>
    
    `;
    cargar=document.querySelector("#cargar");
    cargar.addEventListener("click", mostrarPanelCarga);
    let consultar=document.querySelector("#consultar");
    consultar.addEventListener("click", mostrarPanelConsulta);
    
}
cargar.addEventListener("click", mostrarPanelCarga);

consultar.addEventListener("click", mostrarPanelConsulta);

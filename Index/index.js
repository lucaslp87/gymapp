let alumnos=[];
let cargar=document.querySelector("#cargar");
let consultar=document.querySelector("#consultar");
let panel=document.querySelector("#panel");
let nuevoRM=document.querySelector("#nuevo-rm");

class Alumno{
    constructor(nombre,apellido,dni,plan,){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.plan=plan;
        this.debe=false;
        this.rms={};
        }
}

function mostrarPanelCarga(){
    panel.innerHTML=`

    <img src="../Sources/oro logo.png">

    <h1>CARGAR UN ALUMNO</h1>
        
    <h2>Complete el siguiente formulario</h2>

    <form class="formulario" id="form">
        
        <input type="text" name="nombre" class="menu-input" placeholder="Nombre"></input>
            
        <input type="text" name="apellido" class="menu-input" placeholder="Apellido"></input>
            
        <input type="text" name="dni" class="menu-input" placeholder="DNI"></input>
            
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
    
    form.addEventListener("submit", (event)=>{
        
        event.preventDefault();
        alumnos.push(new Alumno(alumnoACargar.nombre, alumnoACargar.apellido, alumnoACargar.dni, alumnoACargar.plan));
        console.log('Alumno cargado correctamente! La cantidad de alumnos ahora es de ' + alumnos.length +'.' );
        })
    volver.addEventListener("click", mostrarPanelPrincipal);
    
}   

function mostrarPanelConsulta(){

    panel.innerHTML=`

    <img src="../Sources/oro logo.png">

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
        let dniBuscado=form.querySelector(".menu-input").value;   
        console.log(alumnos.find((el)=>el.dni===dniBuscado));           
    });

    volver.addEventListener("click", mostrarPanelPrincipal);
}

function mostrarPanelRM(){
    
    panel.innerHTML=`

    <img src="../Sources/oro logo.png">

    <h1>Cargar un nuevo RM</h1>
        
    <h2>Indique primero el DNI del alumno</h2>

    <form class="formulario" id="form1">
                    
        <input type="number" name="dni" class="menu-input" placeholder="DNI"></input>
            
        <button type="submit" class="menu-button" id="buscar">Buscar</button>
        
        <button type="button" class="menu-button" id="volver">Volver</button>
    
    </form>
    `;

    let form=document.querySelector("#form1"); 
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value; 
        panel.innerHTML=`
        <img src="../Sources/oro logo.png">
        <h1>BIENVENIDO/A</h1>
        <h2>Seleccione una opción</h2>
        <form class="formulario" id="form2">
            
            <select id="lista" class="menu-input">
                <option id="opcion" value="sentadilla">Sentadilla</option>
                <option id="opcion" value="pressPlano">Press plano</option>
                <option id="opcion" value="pressMilitar">Press militar</option>
                <option id="opcion" value="pesoMuerto">Peso muerto</option>
            </select>
            <input type="text" class="menu-input" id="kg" placeholder="Cantidad en Kg"></input>
            <button type="submit" class="menu-button">Guardar</button>
            <button type="button" class="menu-button" id="volver">Volver</button>

        </form>
        `;
    
        volver=document.querySelector("#volver");
        form=document.querySelector("#form2");
        let lista=document.querySelector("#lista");
        let kg=document.querySelector("#kg");
        
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
            let index=alumnos.findIndex((el)=> dniBuscado===el.dni);
            let opcion=lista.value;
            alumnos[index].rms[opcion]= kg.value;
            console.log(alumnos[index]);
            
        })
        volver.addEventListener("click", mostrarPanelRM);

    });

    volver.addEventListener("click", mostrarPanelPrincipal);

}

function mostrarPanelPrincipal(){
    panel.innerHTML=`
    <img src="../Sources/oro logo.png">
                
    <h1>BIENVENIDO/A</h1>
                
    <h2>Seleccione una opción</h2>
                
    <button class="menu-button" id="cargar">Cargar</button>

    <button class="menu-button" id="consultar">Consultar</button>

    <button class="menu-button" id="nuevo-rm">Nuevo RM</button>
    
    `;
    cargar=document.querySelector("#cargar");
    cargar.addEventListener("click", mostrarPanelCarga);
    consultar=document.querySelector("#consultar");
    consultar.addEventListener("click", mostrarPanelConsulta);
    nuevoRM=document.querySelector("#nuevo-rm   ");
    nuevoRM.addEventListener("click", mostrarPanelRM);
    
}
cargar.addEventListener("click", mostrarPanelCarga);

consultar.addEventListener("click", mostrarPanelConsulta);

nuevoRM.addEventListener("click", mostrarPanelRM)
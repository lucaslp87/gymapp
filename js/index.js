let alumnos=[];
let panel=document.querySelector("#panel");
let cargar=document.querySelector("#cargar");
let consultar=document.querySelector("#consultar");
let nuevoRM=document.querySelector("#nuevo-rm");
let cerrarSesionLink=document.querySelector("#cerrarSesionLink");

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
        <h1>Cargar un alumno</h1>
        <h2>Complete el siguiente formulario</h2>
        <form class="formulario" id="form-carga">
            <input type="text" name="nombre" class="menu-input" placeholder="Nombre" required></input>
            <input type="text" name="apellido" class="menu-input" placeholder="Apellido" required></input>
            <input type="text" name="dni" class="menu-input" placeholder="DNI" required></input>
            <input type="text" name="plan" class="menu-input" placeholder="Plan" required></input>
            <button type="submit" class="menu-button">Cargar</button>
            <div class="volver">
                <a href="#" id="volver">Volver</a></p>
            </div>
        </form>
    `;
    
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
        if(alumnoACargar)
        alumnos.push(new Alumno(alumnoACargar.nombre, alumnoACargar.apellido, alumnoACargar.dni, alumnoACargar.plan));
        alert('Alumno cargado correctamente! La cantidad de alumnos ahora es de ' + alumnos.length +'.' );
        form.reset();
        })
    volver.addEventListener("click", mostrarPanelPrincipal);
    
}

function mostrarPanelConsulta(){

    panel.innerHTML=`
    <h1>Consultar un alumno</h1>
    <h2>Ingrese el DNI del alumno</h2>
    <form class="formulario" id="form-consulta">
        <input type="text" name="dni" class="menu-input" placeholder="DNI" required></input>
        <button type="submit" class="menu-button" id="buscar">Buscar</button>
        <div class="volver">
            <a href="#" id="volver">Volver</a></p>
        </div>
    </form>
    `;
    
    let form=document.querySelector("#form-consulta");
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value;   
        let alumnoEncontrado=(alumnos.find((el)=>el.dni===dniBuscado))
        if (alumnoEncontrado!=undefined){
            console.log(alumnoEncontrado);
            if(alumnoEncontrado.debe){
                alert("El alumno tiene deuda pendiente");
            }
            //hacer aparecer un cartel con la info del alumno mas adelante
        }else{
            alert('El DNI no coincide con niguno de los alumnos cargados en el sistema');
            form.reset();
        };           
    });

    volver.addEventListener("click", mostrarPanelPrincipal);
}

function mostrarPanelRM(){
    
    panel.innerHTML=`    
    <h1>Cargar RM</h1>
    <h2>Ingrese el DNI del alumno</h2>
    <form class="formulario" id="form-rm">
        <input type="text" name="dni" class="menu-input" placeholder="DNI" required></input>
        <button type="submit" class="menu-button" id="buscar">Buscar</button>
        <div class="volver">
            <a href="#" id="volver">Volver</a></p>
        </div>
    </form>
    `;

    let form=document.querySelector("#form-rm"); 
    let volver=document.querySelector("#volver");
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        let dniBuscado=form.querySelector(".menu-input").value;
        let alumnoEncontrado=(alumnos.find((el)=>el.dni===dniBuscado))
        if(alumnoEncontrado!=undefined){          
            panel.innerHTML=`            
            <img src="img/oro logo.png">
            <h1>Cargar RM</h1>
            <h2>Selección de ejercicio y RM</h2>
            <form class="formulario" id="form-lista">
                <select class="lista">
                    <option id="opcion" value="sentadilla">Sentadilla</option>
                    <option id="opcion" value="pressPlano">Press plano</option>
                    <option id="opcion" value="pressMilitar">Press militar</option>
                    <option id="opcion" value="pesoMuerto">Peso muerto</option>
                </select>
                <input type="number" class="menu-input" id="kg" placeholder="Cantidad en Kg"></input>
                <button type="submit" class="menu-button">Guardar</button>
                <div class="volver">
                <a href="#" id="volver">Volver</a></p>
                </div>
            </form>
            `;
        
            volver=document.querySelector("#volver");
            form=document.querySelector("#form-lista");
            let lista=document.querySelector(".lista");
            let kg=document.querySelector("#kg");    
            form.addEventListener("submit", (event)=>{
                event.preventDefault();
                let index=alumnos.findIndex((el)=> dniBuscado===el.dni);
                let opcion=lista.value;
                alumnos[index].rms[opcion]= parseFloat(kg.value);
                console.log(alumnos[index]);
                form.reset();
            })
        }else{
            alert('El DNI no coincide con niguno de los alumnos cargados en el sistema');
            form.reset();
        }
        volver.addEventListener("click", mostrarPanelRM);

    });

    volver.addEventListener("click", mostrarPanelPrincipal);

}

function mostrarPanelPrincipal(){   
    panel.innerHTML=`
        <h1>Bienvenido/a</h1>                        
        <h2>Seleccione una opción</h2>
        <form class="formulario" id="menu-principal">    
            <button class="menu-button" id="cargar">Cargar</button>
            <button class="menu-button" id="consultar">Consultar</button>        
            <button class="menu-button" id="nuevo-rm">Nuevo RM</button>
        </form>
        <div class="salir">
            <a href="#" id="cerrarSesionLink">Cerrar sesión</a></p>
        </div>
    `;
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
    window.location.href="./login.html";
}
cargar.addEventListener("click", mostrarPanelCarga);

consultar.addEventListener("click", mostrarPanelConsulta);

nuevoRM.addEventListener("click", mostrarPanelRM);

cerrarSesionLink.addEventListener("click", redirectToLogin);
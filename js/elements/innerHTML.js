export let logInFormHTML=`
        <form id="logInForm">
            <h1>Inicie sesión</h1>
            <input type="text" id="userName" name="userName" placeholder="Usuario" required>
            <input type="password" id="password" name="password" placeholder="Contraseña" required>
            <button type="submit">Iniciar sesión</button>
        </form>
        <div class="signUp">
            <p>¿No tienes cuenta? <a href="#" id="signUpLink">Crear cuenta</a></p>
        </div>          
    `;
export let signUpFormHTML = `
    <form id="signUpForm">
        <h2>Crear cuenta</h2>
        <input type="text" id="newUsername" name="newUserName" placeholder="Nuevo usuario" required>
        <input type="password" id="newPassword" name="newPassword" placeholder="Contraseña" required>
        <input type="password" id="checkPassword" name="checkPassword" placeholder="Repita contraseña" required>
        <input type="text" id="clientNum" name="clientNum" placeholder="Nro. cliente" required>
        <button type="submit">Crear cuenta</button>
    </form>
    <div class="signUp">
        <p>¿Ya tienes cuenta? <a href="#" id="logInLink">Iniciar sesión</a></p>
    </div>
`;
export let panelPrincipalHTML=`
<h1>Bienvenido/a</h1>                        
<h2>Seleccione una opción</h2>
<form class="formulario" id="menu-principal">    
    <button type="button" class="menu-button" id="cargar">Cargar</button>
    <button type="button" class="menu-button" id="consultar">Consultar</button>        
    <button type="button" class="menu-button" id="nuevo-rm">Nuevo RM</button>
</form>
<div class="salir">
    <a href="#" id="cerrarSesionLink">Cerrar sesión</a></p>
</div>
`;
export let panelCargaHTML=`
<h2>Cargar un alumno</h2>
<h3>Complete el siguiente formulario</h3>
<form class="formulario" id="form-carga">
    <input type="text" name="nombre" class="menu-input" placeholder="Nombre" required></input>
    <input type="text" name="apellido" class="menu-input" placeholder="Apellido" required></input>
    <input type="text" name="dni" class="menu-input" placeholder="DNI" required></input>
    <select class="lista">
        <option value="musculacion">Musculación</option>
        <option value="funcional">Funcional</option>
        <option value="full">Full</option>
    </select>
    <button type="submit" class="menu-button">Cargar</button>
    <div class="volver">
        <a href="#" id="volver">Volver</a></p>
    </div>
</form>
`;
export let panelConsultaHTML=`
<h2>Consultar un alumno</h2>
<h3>Ingrese el DNI del alumno</h3>
<form class="formulario" id="form-consulta">
    <input type="text" name="dni" class="menu-input" placeholder="DNI" required></input>
    <button type="submit" class="menu-button" id="btn-buscar">Buscar</button>
    <button type="button" class="menu-button" id="btn-todo">Mostrar todo</button>
    <div class="volver">
        <a href="#" id="volver">Volver</a></p>
    </div>
</form>
`;
  
export let panel1RMHTML=`    
<h2>Cargar RM</h2>
<h3>Ingrese el DNI del alumno</h3>
<form class="formulario" id="form-rm">
    <input type="text" name="dni" class="menu-input" placeholder="DNI" required></input>
    <button type="submit" class="menu-button" id="buscar">Buscar</button>
    <div class="volver">
        <a href="#" id="volver">Volver</a></p>
    </div>
</form>
`;
export let panelOpc1RMHTML=`            
<h2>Cargar RM</h2>
<h3>Selección de ejercicio y RM</h3>
<form class="formulario" id="form-lista">
    <select class="lista">
        <option value="sentadilla">Sentadilla</option>
        <option value="pressPlano">Press plano</option>
        <option value="pressMilitar">Press militar</option>
        <option value="pesoMuerto">Peso muerto</option>
    </select>
    <input type="number" class="menu-input" id="kg" placeholder="Cantidad en Kg"></input>
    <button type="submit" class="menu-button">Guardar</button>
    <div class="volver">
    <a href="#" id="volver">Volver</a></p>
    </div>
</form>
`;
let users=[];
let container = document.querySelector(".container");

class User{
    constructor(userName, password, checkPassword, clientNum){
        this.userName=userName;
        this.password=password;
        this.checkPassword=checkPassword;
        this.clientNum=clientNum;
    }
}

function showLogInForm(){

    let logInFormHTML=`
        <form id="logInForm">
            <img src="../Sources/oro logo.png">
            <h2>Inicie sesión</h2>
            <input type="text" id="username" name="username" placeholder="Usuario" required>
            <input type="password" id="password" name="password" placeholder="Contraseña" required>
            <button type="submit">Iniciar sesión</button>
        </form>
        <div class="signUp">
            <p>¿No tienes cuenta? <a href="#" id="signUpLink">Crear cuenta</a></p>
        </div>
    `;
    container.innerHTML= logInFormHTML;
    let signUpLink=document.querySelector("#signUpLink");
    signUpLink.addEventListener("click", (event)=>{
        event.preventDefault();
        showSignUpForm();
    })
    let logInForm=document.querySelector("#logInForm");
    
    
    logInForm.addEventListener("submit", function (event) {
        event.preventDefault();

    });

}

function showSignUpForm() {
    let signUpFormHTML = `
        <form id="signUpForm">
            <img src="../Sources/oro logo.png">
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

    container.innerHTML = signUpFormHTML;

    let signUpForm =document.querySelector("#signUpForm");
    
    let userACargar={
        newUserName:'',
        newPassword:'',
        checkPassword:'',
        clientNum:''
    }

    signUpForm.addEventListener("input", (event)=>{
        userACargar[event.target.name] = event.target.value;
    });
    
    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if(userACargar.newPassword===userACargar.checkPassword){
        users.push(new User(userACargar.newUserName, userACargar.newPassword, userACargar.checkPassword, userACargar.clientNum));
            console.log('Usuario cargado correctamente! La cantidad de usuarios ahora es de ' + users.length +'.' );
            console.log(users);
        }else{
            console.log("Las contraseñas no coinciden, intente de nuevo");
        }
    });

    let logInLink = document.querySelector("#logInLink");
    logInLink.addEventListener("click", (event)=>{
        event.preventDefault();
        showLogInForm();
    })
}
showLogInForm();

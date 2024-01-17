let users=[];
let panel = document.querySelector("#panel");
let logInFormHTML=`
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
let signUpFormHTML = `
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

let isLog=JSON.parse(localStorage.getItem("isLog"));
isLog?.usuario ? redirectToIndex():showLogInForm();

class User{
    constructor(userName, password, checkPassword, clientNum){
        this.userName=userName;
        this.password=password;
        this.checkPassword=checkPassword;
        this.clientNum=clientNum;
    }
}
//Creo un usuario para acceder rápido mientras codeo;
users.push(new User("lucas","abcd","abcd","101"));

function showLogInForm(){
    panel.innerHTML= logInFormHTML;
    
    let signUpLink=document.querySelector("#signUpLink");
    signUpLink.addEventListener("click", (event) => {
        event.preventDefault();
        showSignUpForm();
    })

    let logInForm=document.querySelector("#logInForm");    
    
    logInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let userToCheck=document.querySelector("#userName").value;
        let passToCheck=document.querySelector("#password").value;
        let userFound = users.find((user)=> user.userName===userToCheck && user.password===passToCheck);
        if(userFound!=undefined){
            localStorage.setItem("isLog", JSON.stringify({usuario:userFound.userName}));
            redirectToIndex();
        }else{
            alert("Usuario no encontrado, intentelo otra vez");
            logInForm.reset();
        }   
    });

}

function showSignUpForm() {
    panel.innerHTML = signUpFormHTML;

    let signUpForm =document.querySelector("#signUpForm");
    let logInLink = document.querySelector("#logInLink");
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
            alert('Cuenta cargada correctamente! La cantidad de usuarios ahora es de ' + users.length +'.' );
            signUpForm.reset();
        }else{
            alert("Las contraseñas no coinciden, intente de nuevo");
        }
        
    });

    logInLink.addEventListener("click", (event)=>{
        event.preventDefault();
        showLogInForm();
    })
}
function redirectToIndex(){
    window.location.href="./index.html";
}


showLogInForm();
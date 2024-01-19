import { logInFormHTML, signUpFormHTML } from "./elements/innerHTML.js";
import { User } from "./elements/class.js";


let users=[];
let panel = document.querySelector("#panel");

let isLog=JSON.parse(localStorage.getItem("isLog"));
isLog?.usuario ? redirectToIndex():showLogInForm();

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
            Swal.fire({
                title: "Error",
                text: "Usuario o contraseña incorrecta, intente nuevamente",
                icon: "error"
              });
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
            Swal.fire({
                title: "",
                text: 'Cuenta cargada correctamente! La cantidad de usuarios ahora es de ' + users.length +'.',
                icon: "success"
            });
            signUpForm.reset();
        }else{
            Swal.fire({
                title: "Error",
                text: "Las contraseñas no coinciden, intente de nuevo",
                icon: "error"
            });
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
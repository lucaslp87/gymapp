document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupLink = document.getElementById("signupLink");
    const container = document.querySelector(".container");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Iniciando sesión...");
        // Agrega aquí la lógica para autenticar al usuario
    });

    signupLink.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Mostrando formulario de registro...");
        showSignupForm();
    });

    function showSignupForm() {
        const signupFormHTML = `
            <form id="signupForm">
                <h2>Crear cuenta</h2>
                <label for="newUsername">Nuevo Usuario:</label>
                <input type="text" id="newUsername" name="newUsername" required>
                <label for="newPassword">Nueva Contraseña:</label>
                <input type="password" id="newPassword" name="newPassword" required>
                <button type="submit">Crear cuenta</button>
            </form>
            <div class="signup">
                <p>¿Ya tienes cuenta? <a href="#" id="loginLink">Iniciar sesión</a></p>
            </div>
        `;

        container.innerHTML = signupFormHTML;

        const signupForm = document.getElementById("signupForm");
        const loginLink = document.getElementById("loginLink");

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Creando cuenta...");
            // Agrega aquí la lógica para crear la cuenta
        });

        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Mostrando formulario de inicio de sesión...");
            // Vuelve a mostrar el formulario de inicio de sesión
            container.innerHTML = loginForm.outerHTML;
        });
    }
});

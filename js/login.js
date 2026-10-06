// Escuchamos cuando el usuario intenta enviar el formulario
document.getElementById('form-login').addEventListener('submit', function(event) {
    // Evitamos que la página se recargue por defecto
    event.preventDefault();

    // Capturamos lo que el usuario escribió
    let correo = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    let divError = document.getElementById('mensaje-error');

    // Limpiamos mensajes de error previos
    divError.style.display = 'none';
    divError.innerText = '';

    // 1. Usamos tu función validarCorreo (de tu librería utileria.js)
    if (!validarCorreo(correo)) {
        divError.innerText = "Error: El formato del correo no es válido.";
        divError.style.display = 'block';
        return; // Detenemos la ejecución
    }

    // 2. Usamos tu función validarPassword (de tu librería)
    if (!validarPassword(password)) {
        divError.innerText = "Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
        divError.style.display = 'block';
        return; // Detenemos la ejecución
    }

    // 3. Si pasó las validaciones, SIMULAMOS EL LOGIN EXITOSO
    // Guardamos el correo en el navegador para que el index.html sepa quién entró
    localStorage.setItem('usuarioLogueado', correo);

    // Redirigimos a la pantalla del sistema
    window.location.href = "index.html";
});
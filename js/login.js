document.getElementById('form-login').addEventListener('submit', function(event) {
    // Evitamos que la página se recargue por defecto
    event.preventDefault();

    // Capturam de datos
    let correo = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    let divError = document.getElementById('mensaje-error');

    divError.style.display = 'none';
    divError.innerText = '';

    // Usamos validarCorreo (librería utileria.js)
    if (!validarCorreo(correo)) {
        divError.innerText = "Error: El formato del correo no es válido.";
        divError.style.display = 'block';
        return; 
    }

    // 2. Usamos validarPassword
    if (!validarPassword(password)) {
        divError.innerText = "Error: La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.";
        divError.style.display = 'block';
        return;
    }

    // 3. Si pasa las validaciones
    // Guardamos el correo en el navegador para que el index.html sepa quién entró
    localStorage.setItem('usuarioLogueado', correo);

    // Redirigimos a la pantalla del sistema
    window.location.href = "index.html";
});
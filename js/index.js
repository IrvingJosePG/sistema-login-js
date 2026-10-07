// sesion, menu y salir

//es para leer el usuario  que guarda login.js
const usuarioGuardado=localStorage.getItem('usuarioLogueado');

// es por si nadie inicio sesion y regresa al login
if(!usuarioGuardado){
    window.location.href= 'login.html';

}

// muestra el usuario en la barra superior y en el saludo
document.getElementById('nombreUsuario').textContent=usuarioGuardado;
document.getElementById('saludoUsuario').textContent=usuarioGuardado;

//muestra o oculta el menu lateral
const botonMenu= document.getElementById('botonMenu');

botonMenu.addEventListener('click', function () {
  document.body.classList.toggle('menu-oculto');
});


//boton de salir que borra la sesion y vuelve al login

const botonSalir = document.getElementById('botonSalir');

botonSalir.addEventListener('click', function () {
  localStorage.removeItem('usuarioLogueado');
  window.location.href = 'login.html';
});

//despues de este igual va lo demas

// formularios internos

const formUsuario = document.getElementById('formUsuario');
const mensajeUsuario = document.getElementById('mensajeUsuario');

formUsuario.addEventListener('submit', function (event) {
  event.preventDefault();

  let usuario = document.getElementById('usuarioCaptura').value.trim();
  let correo = document.getElementById('correoCaptura').value.trim();
  let password = document.getElementById('passwordCaptura').value;

  mensajeUsuario.className = 'alert d-none';
  mensajeUsuario.textContent = '';

  if (usuario == '') {
    mensajeUsuario.textContent = 'Escribe un nombre de usuario.';
    mensajeUsuario.className = 'alert alert-danger';
    return;
  }

  if (!validarCorreo(correo)) {
    mensajeUsuario.textContent = 'El correo electrónico no es válido.';
    mensajeUsuario.className = 'alert alert-danger';
    return;
  }

  if (!validarPassword(password)) {
    mensajeUsuario.textContent = 'La contraseña no cumple con los requisitos de seguridad.';
    mensajeUsuario.className = 'alert alert-danger';
    return;
  }

  mensajeUsuario.textContent = 'Usuario capturado correctamente.';
  mensajeUsuario.className = 'alert alert-success';
  formUsuario.reset();
});


const formAlumno = document.getElementById('formAlumno');
const mensajeAlumno = document.getElementById('mensajeAlumno');

formAlumno.addEventListener('submit', function (event) {
  event.preventDefault();

  let numeroControl = document.getElementById('numeroControl').value.trim();
  let fechaNacimiento = document.getElementById('fechaNacimiento').value;

  mensajeAlumno.className = 'alert alert-danger d-none';
  mensajeAlumno.textContent = '';

  if (numeroControl.length != 6 || isNaN(numeroControl)) {
    mensajeAlumno.textContent = 'El número de control debe tener exactamente 6 dígitos.';
    mensajeAlumno.className = 'alert alert-danger';
    return;
  }

  if (fechaNacimiento == '') {
    mensajeAlumno.textContent = 'Selecciona la fecha de nacimiento.';
    mensajeAlumno.className = 'alert alert-danger';
    return;
  }

  let edad = calcularEdad(fechaNacimiento);
  let tituloModal = document.getElementById('tituloModalEdad');
  let textoModal = document.getElementById('textoModalEdad');

  if (edad >= 18) {
    tituloModal.textContent = 'Alumno mayor de edad';
    textoModal.textContent = 'El alumno tiene ' + edad + ' años y es mayor de edad.';
  } else {
    tituloModal.textContent = 'Alumno menor de edad';
    textoModal.textContent = 'El alumno tiene ' + edad + ' años y es menor de edad.';
  }

  let modalEdad = new bootstrap.Modal(document.getElementById('modalEdad'));
  modalEdad.show();
});

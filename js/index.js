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
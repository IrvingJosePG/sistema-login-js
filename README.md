```markdown
# EduControl - Sistema de Gestión Escolar (Login y Dashboard)

## 1. Portada
* **Proyecto:** Sistema de Control Estudiantil.
* **Integrantes del Equipo (33/33/33):**
  1. **Irving José Pérez Gris:** 
  2. **Sandoval Reyes Miguel:** 
  3. **[Fernández López Jazmín]:**
* **Descripción breve:** Aplicación web interactiva que simula el flujo completo de un sistema de administración escolar. Incluye una pantalla de acceso validada y un panel de control interactivo, gestionando la sesión temporal del usuario.

## 2. Explicación Técnica y Documentación

* **Framework CSS utilizado:** **Bootstrap 5.3**. Elegido por su sistema de cuadrícula (Grid) y sus componentes nativos interactivos (Navbar, Collapse, Modales).
* **Flujo del Login y Sistema de Sesión:**
* El usuario ingresa en `login.html`.
* Las credenciales se validan localmente utilizando métodos de la librería `utileria.js`.
* **Traspaso de datos:** Al pasar las validaciones, el sistema simula un login exitoso guardando el correo del usuario en la memoria del navegador usando `localStorage.setItem('usuarioLogueado', correo)`. Luego redirige al usuario a `index.html`.


* **Métodos principales implementados:** `validarCorreo()` y `validarPassword()`.

## 3. Proceso de Creación (Paso a Paso)

### Fase 1: Login y Validaciones (Por Irving J. Pérez)
1. **Configuración del Repositorio:** Creación de la estructura de carpetas (`css`, `js`, `img`) e inicialización del repositorio en GitHub.
2. **Interfaz de Acceso:** Diseño e implementación de un patrón "Split-Screen" moderno en `login.html`, adaptando los colores corporativos y los textos al contexto.
3. **Lógica de Autenticación:** Se programó el archivo `login.js` para interceptar el formulario, ejecutar las validaciones estrictas y gestionar el `localStorage`.

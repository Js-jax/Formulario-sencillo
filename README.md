# Formulario Sencillo con Validaciones

Este proyecto consiste en una página web que contiene un formulario sencillo con validaciones.

## Estructura del Proyecto

### Header

Contiene el título del formulario.

### Main

Contiene el formulario con los siguientes campos:

- **Nombre**: Campo de texto requerido.
- **Correo Electrónico**: Campo de texto requerido con validación de formato de email.
- **Edad**: Campo de número requerido con un rango entre 18 y 100.
- **Género**: Menú desplegable requerido.
- **Mensaje**: Área de texto requerida.
- **Términos y Condiciones**: Casilla de verificación requerida.

### Footer

Incluye información sobre el autor del formulario y un enlace a una red social.

## Estilos CSS

Se utiliza CSS para estilizar la página, incluyendo:

- Diseño responsivo con flexbox.
- Estilos para inputs, selects, textareas y botones.

## Validaciones HTML5

- `required` para campos obligatorios.
- `type="email"` para validar formato de correo electrónico.
- `min` y `max` para restringir el rango de edad.

## JavaScript

Validación adicional para asegurarse de que se acepten los términos y condiciones.

```javascript
document.getElementById('simpleForm').addEventListener('submit', function(event) {
    if (!document.getElementById('terms').checked) {
        alert('Debe aceptar los términos y condiciones.');
        event.preventDefault();
    }
});

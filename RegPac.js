// Función para validar el formulario de registro
function validateForm() {
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarcontraseña = document.getElementById("confirmarcontraseña").value;

    // Verificar que todos los campos estén completos
    if (email === "" || nombre === "" || contraseña === "" || confirmarcontraseña === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // Verificar que la contraseña y la confirmación de la contraseña coincidan
    if (contraseña !== confirmarcontraseña) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Obtener los usuarios registrados del localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el usuario ya está registrado
    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        mostrarUsuarioRegistrado();
        return false;
    }

    // Guardar el nuevo usuario en el array de usuarios registrados
    const nuevoUsuario = {
        email: email,
        nombre: nombre,
        contraseña: contraseña
    };
    usuariosRegistrados.push(nuevoUsuario);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "Login.html";

    // Retornar false para evitar que el formulario se envíe automáticamente
    return false;
}

// Función para mostrar un mensaje de alerta indicando que el usuario ya está registrado
function mostrarUsuarioRegistrado() {
    const mensaje = "El usuario ya está registrado.";
    alert(mensaje);
}

// Asignar la función de validación al evento 'submit' del formulario
document.getElementById("registroForm").onsubmit = validateForm;

// Función para validar el formulario de inicio de sesión
function validateForm(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores del formulario
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;

    // Verificar si los campos están completos
    if (email === "" || contraseña === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // Obtener los datos almacenados en el localStorage
    const registros = JSON.parse(localStorage.getItem("usuarios"));

    // Verificar si el usuario está registrado y si la contraseña coincide
    let usuarioEncontrado = false;
    if (registros) {
        registros.forEach(function(registro) {
            if (registro.email === email) {
                if (registro.contraseña === contraseña) {
                    usuarioEncontrado = true;
                    return;
                } else {
                    alert("Contraseña incorrecta.");
                    return false; // Salir del bucle si la contraseña es incorrecta
                }
            }
        });
    }

    // Si el usuario está registrado y la contraseña coincide, redirigir al usuario a la página de inicio
    if (usuarioEncontrado) {
        window.location.href = "perfilmedico.html";
    } else {
        alert("Usuario no registrado.");
        // Redirigir al usuario a la página de registro
        window.location.href = "regmed.html";
    }

    // Retornar false para evitar que el formulario se envíe automáticamente
    return false;
}

// Asignar la función de validación al evento 'submit' del formulario
document.getElementById("loginForm").addEventListener("submit", validateForm);

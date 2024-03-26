function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;

    if (email === "" || contraseña === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    const registros = JSON.parse(localStorage.getItem("medicos"));

    let usuarioEncontrado = false;
    if (registros) {
        registros.forEach(function(registro) {
            if (registro.email === email) {
                usuarioEncontrado = true; // Se encontró el usuario
                if (registro.contraseña === contraseña) {
                    window.location.href = "perfilmedico.html";
                    return; // Contraseña correcta, redirigir al perfil
                } else {
                    alert("Contraseña incorrecta.");
                    return; // Contraseña incorrecta
                }
            }
        });
    }

    if (!usuarioEncontrado) {
        alert("Usuario no registrado."); // Usuario no encontrado en los registros
        window.location.href = "regmed.html";
    }

    return false;
}

document.getElementById("loginForm").addEventListener("submit", validateForm);

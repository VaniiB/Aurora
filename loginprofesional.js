function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;

    if (email === "" || contraseña === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    const registros = JSON.parse(localStorage.getItem("usuarios"));

    let usuarioEncontrado = false;
    let contraseñaCorrecta = false;

    if (registros) {
        registros.forEach(function(registro) {
            if (registro.email === email) {
                if (registro.contraseña === contraseña) {
                    usuarioEncontrado = true;
                    contraseñaCorrecta = true;
                    return; // No es necesario seguir iterando si se encontró una coincidencia
                } else {
                    contraseñaCorrecta = false;
                    return; // No es necesario seguir iterando si se encontró una coincidencia con email pero contraseña incorrecta
                }
            }
        });
    }

    if (usuarioEncontrado && contraseñaCorrecta) {
        window.location.href = "perfilmedico.html";
    } else if (usuarioEncontrado && !contraseñaCorrecta) {
        alert("Contraseña incorrecta.");
    } else {
        alert("Usuario no registrado.");
        window.location.href = "regmed.html";
    }

    return false;
}

document.getElementById("loginForm").addEventListener("submit", validateForm);

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
                usuarioEncontrado = true;
                if (registro.contraseña === contraseña) {
                    contraseñaCorrecta = true;
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

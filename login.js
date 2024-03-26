function validateForm() {

    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;


    if (email === "" || contraseña === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }


    const registros = JSON.parse(localStorage.getItem("usuarios"));


    let usuarioEncontrado = false;
    if (registros) {
        registros.forEach(function(registro) {
            if (registro.email === email && registro.contraseña === contraseña) {
                usuarioEncontrado = true;
                return;
            }
        });
    }


    if (usuarioEncontrado) {
        window.location.href = "indexpaciente.html";
    } else {
        alert("Usuario no registrado.");

        window.location.href = "RegPac.html";
    }


    return false;
}


document.getElementById("loginForm").onsubmit = validateForm;

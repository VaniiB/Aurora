
function validateForm() {
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
    const confirmarcontraseña = document.getElementById("confirmarcontraseña").value;


    if (email === "" || nombre === "" || contraseña === "" || confirmarcontraseña === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }


    if (contraseña !== confirmarcontraseña) {
        alert("Las contraseñas no coinciden.");
        return false;
    }


    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];


    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        mostrarUsuarioRegistrado();
        return false;
    }


    const nuevoUsuario = {
        email: email,
        nombre: nombre,
        contraseña: contraseña
    };
    usuariosRegistrados.push(nuevoUsuario);


    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));


    window.location.href = "Login.html";


    return false;
}


function mostrarUsuarioRegistrado() {
    const mensaje = "El usuario ya está registrado.";
    alert(mensaje);
}


document.getElementById("registroForm").onsubmit = validateForm;

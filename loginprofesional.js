
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
    if (registros) {
        registros.forEach(function(registro) {
            if (registro.email === email) {
                if (registro.contraseña === contraseña) {
                    usuarioEncontrado = true;
                    return;
                } else {
                    alert("Contraseña incorrecta.");
                    return false; 
                }
            }
        });
    }


    if (usuarioEncontrado) {
        window.location.href = "perfilmedico.html";
    } else {
        alert("Usuario no registrado.");

        window.location.href = "regmed.html";
    }


    return false;
}


document.getElementById("loginForm").addEventListener("submit", validateForm);

document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".div-enlaces a");

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que el enlace cambie de página al hacer clic

            // Eliminar la clase 'activo' de todos los enlaces
            enlaces.forEach(function (el) {
                el.classList.remove("activo");
            });

            // Agregar la clase 'activo' al enlace clicado
            this.classList.add("activo");

            // Cambiar el color del enlace 'Todos' al hacer clic en otro enlace
            if (this.id !== "todos") {
                document.getElementById("todos").classList.remove("activo");
            }
        });
    });

    // Seleccionar todos los botones "Cancelar"
    const cancelarButtons = document.querySelectorAll('.cancelar-btn');

    // Iterar sobre cada botón y agregar un evento de clic
    cancelarButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtener el elemento padre (la tarjeta) y eliminarlo
            const card = button.closest('.columnas > div');
            card.remove();
        });
    });
});

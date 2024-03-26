document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".div-enlaces a");

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (event) {
            event.preventDefault(); 


            enlaces.forEach(function (el) {
                el.classList.remove("activo");
            });


            this.classList.add("activo");


            if (this.id !== "todos") {
                document.getElementById("todos").classList.remove("activo");
            }
        });
    });


    const cancelarButtons = document.querySelectorAll('.cancelar-btn');


    cancelarButtons.forEach(button => {
        button.addEventListener('click', () => {

            const card = button.closest('.columnas > div');
            card.remove();
        });
    });
});

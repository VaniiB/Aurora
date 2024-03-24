document.addEventListener('DOMContentLoaded', function() {
    const profileBoxes = document.querySelectorAll('.profile-box');
  
    profileBoxes.forEach((profileBox) => {
        const scheduleButton = profileBox.querySelector('.schedule-button');
        const calendar = profileBox.querySelector('.calendar');
  
        scheduleButton.addEventListener('click', function(event) {
            event.stopPropagation(); 
            calendar.style.display = 'block'; 
        });
  
        document.addEventListener('click', function(event) {
            if (!calendar.contains(event.target)) {
                calendar.style.display = 'none'; 
            }
        });
  
        calendar.addEventListener('click', function(event) {
        });
    });
  
    const solicitarCitaButton = document.getElementById('solicitarCitaButton');
  
    solicitarCitaButton.addEventListener('click', function(event) {
        event.preventDefault(); 
  
        const nombreApellido = document.getElementById('nombreApellido').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const especialidad = document.getElementById('especialidad').value;
        const horario = document.getElementById('horario').value;
        const dia = document.getElementById('dia').value;
        const motivoConsulta = document.getElementById('motivoConsulta').value;

        if (!email || !asunto || !especialidad || !horario || !dia || !motivoConsulta) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
            });
            return; 
        }
  
        const citaData = {
            nombreApellido: nombreApellido,
            email: email,
            asunto: asunto,
            especialidad: especialidad,
            horario: horario,
            dia: dia,
            motivoConsulta: motivoConsulta
        };

        let citasArray = JSON.parse(localStorage.getItem('citasArray')) || [];

        citasArray.push(citaData);

        localStorage.setItem('citasArray', JSON.stringify(citasArray));
  
        Swal.fire({
            title: "Tu cita ha sido programada",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            customClass: {
                confirmButton: 'custom-confirm-button-class'
            },
            confirmButtonText: "Ir a ver mis turnos",
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "visualizarturnos.html"; 
            }
        });

        generarTarjetaDeTurno(citaData);
        
        document.getElementById('consultaForm').reset();
    });
  
    const encontrarDoctoresLink = document.querySelector('.menu li:nth-child(1) a'); 
    encontrarDoctoresLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = "Buscarmedico.html"; 
    });
  
    const horarioButtons = document.querySelectorAll('.horario-button');
    horarioButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = "Formulariopaciente.html"; 
        });
    });

    function generarTarjetaDeTurno(citaData) {
        const turnosContainer = document.getElementById('turnos-container');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');

        cardDiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="img/medico-paciente.jpg" class="card-img-top" alt="Foto del médico">
                <div class="card-body">
                    <h5 class="card-title">${citaData.especialidad}</h5>
                    <p class="card-text">Horario: ${citaData.horario}</p>
                    <p class="card-text">Día: ${citaData.dia}</p>
                    <p class="card-text">Precio de la cita: $2000</p>
                    <p class="card-text">Doctor: Dr. Ejemplo</p>
                    <button class="btn btn-danger">Cancelar Cita</button>
                </div>
            </div>
        `;

        turnosContainer.appendChild(cardDiv);
    }
});

const visualizacionTurnosLink = document.querySelector('.menu li:nth-child(3) a'); 
    visualizacionTurnosLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = "visualizarturnos.html"; 
    });


    
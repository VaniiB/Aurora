document.addEventListener('DOMContentLoaded', function() {
    const turnosContainer = document.getElementById('turnos-container');

    const citasArrayJSON = localStorage.getItem('citasArray');
    const citasArray = JSON.parse(citasArrayJSON) || [];

    const especialidadesConDoctores = {
        "Cardiología": "Dra. Valeria García",
        "Dermatología": "Dra. María Fernández",
        "Ginecología": "Dra. Juana  Repetto",
        "Neurología": "Dr. Martin Cappola",
        "Oftalmología": "Dr. Sebastián López",
        "Otra Especialidad": "Especialista a disposición"
    };

    const especialidadesConImagenes = {
        "Cardiología": "img/cardiologa.jpg",
        "Dermatología": "img/ginecologa.jpg",
        "Ginecología": "img/hablar-con-su-medico.jpg",
        "Neurología": "img/neurologo.jpg",
        "Oftalmología": "img/oftalmologo.jpg",
        "Otra Especialidad": "img/Vector.png"
    };
    
    
    if (citasArray) {
        citasArray.forEach((citaData, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.style.width = '18rem';

            const imagenEspecialidad = especialidadesConImagenes[citaData.especialidad];

            const img = document.createElement('img');
            img.src = imagenEspecialidad;
            img.classList.add('card-img-top');
            img.alt = 'Imagen de la especialidad';
            cardDiv.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const especialidad = document.createElement('h5');
            especialidad.classList.add('card-title');
            especialidad.textContent = citaData.especialidad;
            cardBody.appendChild(especialidad);

            const nombreDoctor = especialidadesConDoctores[citaData.especialidad];

            const doctor = document.createElement('p');
            doctor.classList.add('card-text');
            doctor.textContent = 'Doctor: ' + nombreDoctor;
            cardBody.appendChild(doctor);

            const horarioArray = citaData.horario.split(" a ");
            const horarioInicio = horarioArray[0];
            const horarioFin = horarioArray[1];

            const horario = document.createElement('p');
            horario.classList.add('card-text');
            horario.textContent = 'Horario: ' + horarioInicio + ' - ' + horarioFin;
            cardBody.appendChild(horario);

            const dia = document.createElement('p');
            dia.classList.add('card-text');
            dia.textContent = 'Día: ' + citaData.dia;
            cardBody.appendChild(dia);

            const precio = document.createElement('p');
            precio.classList.add('card-text');
            precio.textContent = 'Precio de la cita: $2000';
            cardBody.appendChild(precio);

            const cancelarBtn = document.createElement('button');
            cancelarBtn.classList.add('btn', 'btn-danger');
            cancelarBtn.textContent = 'Cancelar Cita';
            cardBody.appendChild(cancelarBtn);

            cancelarBtn.addEventListener('click', function() {
                turnosContainer.removeChild(cardDiv);
                citasArray.splice(index, 1);
                localStorage.setItem('citasArray', JSON.stringify(citasArray));
            });

           
            cardDiv.appendChild(cardBody);

            
            turnosContainer.appendChild(cardDiv);
        });
    }
});
const solicitudTurnoLink = document.querySelector('.menu li:nth-child(2) a'); 
solicitudTurnoLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = "Formulariopaciente.html"; 
});
const encontrarDoctoresLink = document.querySelector('.menu li:nth-child(1) a'); 
encontrarDoctoresLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = "Buscarmedico.html"; 
});

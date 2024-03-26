document.addEventListener('DOMContentLoaded', function () {
    const profileBoxes = document.querySelectorAll('.profile-box');

    profileBoxes.forEach((profileBox) => {
        const scheduleButton = profileBox.querySelector('.schedule-button');
        const calendar = profileBox.querySelector('.calendar');

        scheduleButton.addEventListener('click', function (event) {
            event.stopPropagation(); 
            calendar.style.display = 'block'; 
        });

        document.addEventListener('click', function (event) {
            if (!calendar.contains(event.target)) {
                calendar.style.display = 'none'; 
            }
        });

        calendar.addEventListener('click', function (event) {
            
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const dates = document.querySelectorAll('.date');
    
    dates.forEach(function(date) {
        date.addEventListener('click', function () {
           
            dates.forEach(function (el) {
                el.classList.remove('activo');
            });

           
            date.classList.add('activo');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dates = document.querySelectorAll('.date');
    const prevDayBtn = document.getElementById('prevDay');
    const nextDayBtn = document.getElementById('nextDay');
    let currentIndex = 0;

 
    updateCurrentIndex(0);

    prevDayBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            updateCurrentIndex(currentIndex - 1);
        }
    });

    nextDayBtn.addEventListener('click', function () {
        if (currentIndex < dates.length - 1) {
            updateCurrentIndex(currentIndex + 1);
        }
    });

    dates.forEach(function (date, index) {
        date.addEventListener('click', function () {
            updateCurrentIndex(index);
        });
    });

    function updateCurrentIndex(index) {
        dates.forEach(function (date) {
            date.classList.remove('activo');
        });
        dates[index].classList.add('activo');
        currentIndex = index;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const horarioButtons = document.querySelectorAll('.horario-button');

    horarioButtons.forEach((button) => {
        button.addEventListener('click', function () {
            button.classList.toggle('clicked');
        });
    });
});



const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const pregunta = toggle.parentElement;
        const respuesta = pregunta.nextElementSibling;
        
        if (respuesta.style.display === 'block') {
            respuesta.style.display = 'none';
            toggle.textContent = '+';
        } else {
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.display = 'none';
            });
            toggle.textContent = '-';
            respuesta.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const horarioButtons = document.querySelectorAll('.horario-button, .horario-button-principal');

    horarioButtons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            if (!button.classList.contains('selected')) {
                button.style.backgroundColor = '#007484'; 
                button.style.color = '#fff'; 
            }
        });

        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('selected')) {
                button.style.backgroundColor = 'transparent'; 
                button.style.color = '#007484'; 
            }
        });

        button.addEventListener('click', () => {
            if (!button.classList.contains('selected')) {
                horarioButtons.forEach(btn => {
                    btn.classList.remove('selected'); 
                    btn.style.backgroundColor = 'transparent'; 
                    btn.style.color = '#007484'; 
                });
                button.classList.add('selected'); 
                button.style.backgroundColor = '#00595b'; 
                button.style.color = '#fff'; 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const solicitudTurnoLink = document.querySelector('.menu li:nth-child(2) a'); 
    solicitudTurnoLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = "Formulariopaciente.html"; 
    });

    const horarioButtons = document.querySelectorAll('.horario-button');
    horarioButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = "Formulariopaciente.html"; 
        });
    });
});


const visualizacionTurnosLink = document.querySelector('.menu li:nth-child(3) a'); 
visualizacionTurnosLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = "visualizarturnos.html"; 
});

document.addEventListener("DOMContentLoaded", function() {
    var profesionalLink = document.getElementById("profesional-link");
    profesionalLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        window.location.href = "login.html"; 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const pageNumbers = document.querySelectorAll(".page-number");


    pageNumbers.forEach(button => {
        button.addEventListener("click", function() {

            pageNumbers.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
});

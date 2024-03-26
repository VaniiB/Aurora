document.getElementById('medicForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const biografia = document.getElementById('biografia').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const especialidad = document.getElementById('especialidad').value.trim();
    const hospital = document.getElementById('hospital').value.trim();
    const experiencia = document.getElementById('experiencia').value.trim();
    const horarios = document.getElementById('horarios').value.trim();
    const urgencia = document.getElementById('urgencia').checked; 
    const matricula = document.getElementById('matricula').value.trim();
    const especialidades = document.getElementById('especialidades').value.trim();

    if (
        biografia === '' ||
        nombre === '' ||
        especialidad === '' ||
        hospital === '' ||
        experiencia === '' ||
        horarios === '' ||
        matricula === ''
    ) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }


    const medicData = {
        biografia: biografia,
        nombre: nombre,
        especialidad: especialidad,
        hospital: hospital,
        experiencia: experiencia,
        horarios: horarios,
        urgencia: urgencia,
        matricula: matricula,
        especialidades: especialidades,
    };


    const medicosRegistrados = JSON.parse(localStorage.getItem('medicos')) || [];


    medicosRegistrados.push(medicData);


    localStorage.setItem('medicos', JSON.stringify(medicosRegistrados));


    document.getElementById('medicForm').reset();

    alert('¡Formulario enviado correctamente y datos almacenados!');
    window.location.href = 'Loginprofesional.html';
});

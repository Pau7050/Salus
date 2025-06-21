// Mostrar solo la sección seleccionada y ocultar las demás
function mostrarSeccion(id) {
    // Oculta todas las secciones
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('visible'));
    // Muestra solo la seleccionada
    const seccion = document.getElementById(id);
    if (seccion) seccion.classList.add('visible');
    // Quita 'active' de todos los botones del menú
    document.querySelectorAll('.sidebar nav ul li a').forEach(a => a.classList.remove('active'));
    // Agrega 'active' solo al botón pulsado
    let btnId = "btn-" + id.replace('seccion-', '');
    let btn = document.getElementById(btnId);
    if (btn) btn.classList.add('active');
}

// Listeners del menú lateral
document.getElementById('btn-inicio').addEventListener('click', e => { e.preventDefault(); mostrarSeccion('seccion-inicio'); });
document.getElementById('btn-cita').addEventListener('click', e => { e.preventDefault(); mostrarSeccion('seccion-cita'); });
document.getElementById('btn-equipos').addEventListener('click', e => { e.preventDefault(); mostrarSeccion('seccion-equipos'); });

// Por defecto, muestra solo la sección de inicio
mostrarSeccion('seccion-inicio');

// Formulario Programar Cita, solo muestra mensaje de éxito
document.getElementById('citaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('msgCita').textContent = '¡Cita programada! (En la versión final, recibirás un correo con los datos de tu cita)';
    setTimeout(() => {
        document.getElementById('msgCita').textContent = '';
        document.getElementById('citaForm').reset();
    }, 3500);
});
let listaAlumnos = [
    "Javier","Lili","Diana","MarcosU","MarcosZ","Fran","SergioV",
    "SergioL","Carlos","David","Dario","Jhonathan","MiguelO","MiguelR",
    "Jose","Sara","Alexis","Jorge","David","Martin"
];


function mostrarAlumnos() {
    const contenedor = document.getElementById("lista-alumnos");
    contenedor.textContent = listaAlumnos.join(" | ");
}

function sorteoAlumnos() {
    const indiceGanador = Math.floor(Math.random() * listaAlumnos.length);
    const ganador = listaAlumnos[indiceGanador];

    // Mostrar ganador
    document.getElementById("ganador").textContent = "Ganador del sorteo: " + ganador;

    // Eliminar ganador del array
    listaAlumnos.splice(indiceGanador, 1);
    if (listaAlumnos.length === 0) {
        alert("No hay más alumnos para sortear.");
        return;
    }

    // Actualizar la lista mostrada en pantalla
    mostrarAlumnos();
}

// Con esto mostramos la lista al cargar la páginaF
window.onload = function() {
    mostrarAlumnos();
}

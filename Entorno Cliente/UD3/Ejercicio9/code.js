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
    document.getElementById("ganador").textContent = "Ganador del sorteo: " + ganador;
}


window.onload = function() {
    mostrarAlumnos();
};

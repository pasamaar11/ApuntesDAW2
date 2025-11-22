function calcularDiaSemana() {
    let fecha_ = prompt("Introduce la fecha de hoy en este formato: YYYY/MM/DD");
    let fecha = new Date(fecha_);

    if (isNaN(fecha)) {
        alert("ERROR. Fecha no válida.");
        return;
    }

    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let diaSemana = dias[fecha.getDay()];

    document.write(
        "Fecha dada: " + fecha_ + "<br>" +
        "Día de la semana: " + diaSemana
    );
}

let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function mostrarProximosDias() {
    let select = document.getElementById("dias");
    let numDias = parseInt(document.getElementById("numDias").value);
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar resultado previo

    // Obtener los días seleccionados (pueden ser múltiples)
    let diasSeleccionados = Array.from(select.selectedOptions).map(option => option.value);

    if (diasSeleccionados.length === 0 || isNaN(numDias) || numDias < 1) {
        resultadoDiv.innerText = "Por favor, selecciona al menos un día y un número válido de días.";
        return;
    }

    let hoy = new Date();
    let resultados = [];

    diasSeleccionados.forEach(dia => {
        let indiceDia = diasSemana.indexOf(dia);
        let contador = 0;
        let fecha = new Date(hoy);

        while (contador < numDias) {
            fecha.setDate(fecha.getDate() + 1);
            if (fecha.getDay() === (indiceDia + 1) % 7) { // JS: Domingo=0, Lunes=1 ...
                resultados.push(`${dia}: ${fecha.toLocaleDateString()}`);
                contador++;
            }
        }
    });

    resultadoDiv.innerHTML = resultados.join("<br>");
}

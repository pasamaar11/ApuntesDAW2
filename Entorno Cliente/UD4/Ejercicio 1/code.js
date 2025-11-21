const botonGenerar = document.getElementById("generar");

function calculoSalarioNeto(){
    //Obtenemos los elementos del DOM (son los inputs del formulario)
    const inputSalarioB = document.getElementById("salarioB").value;
    const inputRetencion = document.getElementById("retencion").value;
    const inputNumPagas = document.getElementById("nPagas").value;

    //Convertimos los valores del DOM
    const salarioBrutoAnual = parseFloat(inputSalarioB);
    const porcentajeRetencion = parseFloat(inputRetencion);
    const numPagas = parseInt(inputNumPagas);

    const salarioNetoAnual = salarioBrutoAnual * (1 - (porcentajeRetencion / 100))
    
    const salarioNetoMensual = (salarioNetoAnual / numPagas).toFixed(2);

    document.writeln(`El salario neto mensual/por paga es: ${salarioNetoMensual} €`);
}

botonGenerar.addEventListener('click', calculoSalarioNeto);
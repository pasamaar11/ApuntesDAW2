const calcular = document.getElementById("calcular");

function calcularArea(){
    const base = document.getElementById("base").value;
    const altura =document.getElementById("altura").value;

    const area = base * altura;

    document.writeln(`El área del rectángulo es: ${area}.`);
}

calcular.addEventListener('click', calcularArea);
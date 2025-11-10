let limite = parseInt(prompt("Introduce un número límite:"));

let primos = ""; // cadena para guardar los primos encontrados

for (let num = 2; num <= limite; num++) {
    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        primos += num + " ";
        console.log(num + " es primo");
    }
}

if (primos === "") {
    alert("No hay números primos hasta " + limite);
} else {
    alert("Números primos hasta " + limite + ": " + primos);
}

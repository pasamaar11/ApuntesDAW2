function esPrimo(numero) {

    if (numero <= 1) return false;
    else if (numero === 2) return true;
    else if (numero % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

let numero = parseInt(prompt("Dime un número:"))
if (esPrimo(numero)) {
    alert(numero + " es primo")
    console.log(numero + " es primo");
} else {
    alert(numero + " no es primo")
    console.log(numero + " no es primo");
}

let n = parseInt(prompt("dame un número entero positivo"), 10);

while (isNaN(n) || n < 0) {
    n = parseInt(prompt("ERROR.Dame un numero positivo:"), 10);
}

let factorial = 1;

if (n === 0) {
    console.log("0! = 1");
} else {
    let proceso = "";
    for (let i = 1; i <= n; i++) {
        if (i === 1) proceso = "1";
        else proceso += " x " + i;

        factorial *= i;
        console.log(i + ":" + proceso + "=" + factorial);
    }
}

alert("El factorial de " + n + " es " + factorial);

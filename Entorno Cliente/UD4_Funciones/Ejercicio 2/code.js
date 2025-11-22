var a = Number(prompt("Escriba un número: "));
var b = Number(prompt("Escriba un número: "));

function calculos(){
    if (isNaN(b)){
        b = 0;
    }

    var suma = a + b;
    return suma;
}

alert(calculos());
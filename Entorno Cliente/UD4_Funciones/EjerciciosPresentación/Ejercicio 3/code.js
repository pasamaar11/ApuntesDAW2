var a = Number(prompt("Escriba un número: "));
var b = Number(prompt("Escriba un número: "));

function calculos(){
    var suma = a + (b || b === 0);//En esta linea decimos, que si b no es numero sea 0
    return suma;
}

alert(calculos());
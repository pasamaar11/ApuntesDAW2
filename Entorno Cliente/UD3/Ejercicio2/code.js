let numero = parseInt(prompt("Dime un numero"))
let desplazamiento = parseInt(prompt("Posiciones a desplazar"))
let resultado = numero << desplazamiento
alert(
    "Numero original: " + numero +
    "\nEn binario: " + numero.toString(2) +
    "\nDesplazamiento: " + desplazamiento + " bits" +
    "\nResultado: " + resultado + 
    "\nEn binario: " + resultado.toString(2)
)
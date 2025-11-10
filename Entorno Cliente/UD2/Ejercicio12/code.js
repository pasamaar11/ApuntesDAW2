let numero = parseInt(prompt("Escribe un número"));

switch (true) {
    case (numero < 5):
        alert("Suspenso");
        break;
    case (numero === 5 || numero === 6):
        alert("Aprobado");
        break;
    case (numero === 7 || numero === 8):
        alert("Notable");
        break;
    case (numero === 9 || numero === 10):
        alert("Sobresaliente");
        break;
    default:
        alert("Número no válido");
        break;
}

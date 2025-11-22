let segundos = 0;
let intervalo = null;

function cronometrar() {
    if (intervalo) return; // evita múltiples intervalos
    intervalo = setInterval(() => {
        segundos++;
        document.getElementById("display").innerText = segundos + " segundos";
    }, 1000);
}

function pararCronometro() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciarCronometro(){
    clearInterval(intervalo)
    segundos = 0
    intervalo = null
    document.getElementById("display").innerText = segundos + " segundos";
}

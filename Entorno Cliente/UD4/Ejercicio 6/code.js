const inputTlf = document.getElementById("telefono");
const validar = document.getElementById("validar");
const mensaje = document.getElementById("mensaje");

function esFijo(numero) {
    if (numero[0] !== "8" && numero[0] !== "9") {
        return false;
    } else if (numero.length !== 9) {
        return false;
    } else if (numero[0] === "-") {
        return false;
    } else if (numero[1] === "0" && numero[2] === "0") {
        return false;
    } else {
        return true;
    }
}

function validacionMensaje(){
    const valor =  inputTlf.value;

    if(esFijo(valor)){
        mensaje.style.color = "green";
        mensaje.textContent = "Número de teléfono válido";
    }else{
        mensaje.style.color = "red";
        mensaje.textContent = "Número de teléfono NO válido";
    }
}

// Este metodo se lanza la función validacionMensaje una vez clicas en el botón (colocado en html)
validar.addEventListener('click', validacionMensaje);

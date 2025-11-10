function cambioColorFondo(fondo){
    fondo = document.body.style.backgroundColor = "yellow";
}

function promptBase(){
    let base = prompt("Escribe la base");
    return parseFloat(base);
}

function promptExponente(){
    let exp = prompt("Escribe el exponente");
    return parseFloat(exp);
}

function elevarBaseAExponente(base, exp){
    let numero = Math.pow(base, exp)
    return numero
}

function promptNombre(){
    let nombre = prompt("Escribe tu nombre")
    let apellido = prompt("Escribe tu apellido")
    let fullname = nombre + " " +apellido
    return fullname
}


function promptEdad(){
    let edad = prompt("Escribe tu edad")
    return parseFloat(edad)
}

function calculoAñoNacimiento(edad){
    let hoy = new Date().getFullYear()
    let añoNacimiento = hoy - edad
    return añoNacimiento
}
let nombre = prompt("Escribe tu nombre");
let apellido = prompt("Escribe tu apellido");
let nombreCompleto = nombre + " " + apellido;

let fechaNacimiento = prompt("Escribe tu fecha de cumpleaños, en este formato:\nYYYY/MM/DD");

let añoNacimiento = new Date(fechaNacimiento).getFullYear();
let mesNacimiento = new Date(fechaNacimiento).getMonth();
let diaNacimiento = new Date(fechaNacimiento).getDate();

let hoy = new Date();
let hoyAño = hoy.getFullYear();
let hoyMes = hoy.getMonth();
let hoyDia = hoy.getDate();

let edad = hoyAño - añoNacimiento;

if (hoyMes < mesNacimiento || (hoyMes === mesNacimiento && hoyDia < diaNacimiento)) {
    edad--;
}

/* MOSTRAR DATOS */
alert("Nombre Completo: " + nombreCompleto 
    + "\nFecha de nacimiento: " + fechaNacimiento 
    + "\nEdad: " + edad);

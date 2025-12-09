const servicioA = new Limpieza("Limpiezas Zaragoza", "Mayor", 15706, 50001);

console.log("---");

console.log(`El código postal de ${servicioA.imprimeNombre()} es: ${servicioA.imprimeCodigoPostal()}.`);
console.log(`La calle es: ${servicioA.imprimeCalle()}.`);

console.log("---");
servicioA.asignarServicios();
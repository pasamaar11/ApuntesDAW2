function cambiarTitulo() {
    console.log("Botón pulsado");
    document.getElementById("titulo").innerHTML = "Enhorabuena, lo has logrado!";
}

function calcularTotalIVA() {
                const precio = 200;
                const iva = 21;
                const total = precio + (precio * iva / 100);
                document.getElementById('resultado').textContent = 
                    "El precio total es: " + total.toFixed(2) + " €";
            }

function area(){
                const lado = 40;
                const area = lado * lado;
                document.getElementById('resultado').textContent = 
                    "El área del cuadrado es: " + area + " cm²";
            }
            
function perimetro(){
                const lado = 40;
                const perimetro = 4 * lado;
                document.getElementById('resultado').textContent = 
                    "El perímetro del cuadrado es: " + perimetro + " cm";
            }
function promptNombre(){
    let name = prompt("Escribe tu nombre");
    return name;
}
function promptNumero(){
    let numero = prompt("Escribe numero");
    return parseFloat(numero);
}
function hacerMedia(numero1,numero2,numero3){
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
}
function promptKilometro(){
    let kilometros = prompt("Escriba los kilómetros recorridos por su coche");
    return parseFloat(kilometros);
}
function promptLitros(){
    let litros = prompt("Escriba los litros consumidos por su coche");
    return parseFloat(litros);
}
function combustiblePorKilometro(kilometros,litros){
    let consumo = litros / kilometros;
    return consumo;
}
class Edificio{
    constructor(calle, numero, codigoPostal){
        this._calle = calle;
        this._numero = numero;
        this._codigoPostal = codigoPostal;

        this._plantas = [];

        console.log(`Construido nuevo edificio en calle: ${this._calle} , nº: ${this._numero}, código postal: ${this._codigoPostal}.`);

        
    }
        
    imprimeCalle(){
        return this._calle;
    }

    imprimeNumero(){
        return this._numero;
    }

    imprimeCodigoPostal(){
        return this._codigoPostal;
    }

    modificarNumero(nuevoNumero){
        this._numero = nuevoNumero;
    }

    modificarCalle(nuevaCalle){
        this._calle = nuevaCalle;
    }

    modificarCodigoPostal(nuevoCodigoPostal){
        this._codigoPostal = nuevoCodigoPostal;
    }

    agregarPlantasYPuertas(numPlantas, numPuertas){
        for(let i = 0; i < numPlantas; i++){
            //Esta linea crea un array para cada planta y por cada puerta diciendo "Sin propietario"
            const nuevaPlanta = Array(numPuertas).fill("Sin propietario");
            this._plantas.push(nuevaPlanta);
        }
    }

    agregarPropietario(nombre, planta, puerta){
        //convertimos los numeros de planta y puerta al indice de array, que es 0
        const indicePlanta = planta -1;
        const indicePuerta = puerta -1;

        //verifico que existe dicha puerta y planta
        if(indicePlanta < 0 || indicePlanta >= this._plantas.length){
            console.error(`ERROR: La planta ${planta} no existe.`)
            return;
        }

        if(indicePuerta < 0 || indicePuerta >= this._plantas[indicePlanta].length){
            console.error(`ERROR: La puerta ${puerta} no existe en la planta ${planta}.`);
            return;
        }
        //Asignar nombre
        this._plantas[indicePlanta][indicePuerta] = nombre;
        
        console.log(`${nombre} es ahora el propietario de la puerta ${puerta} en la planta ${planta}.`)
    }
    
    imprimePlantas(){
        console.log(`Listado de propietarios del edificio calle ${this.imprimeCalle()} número ${this.imprimeNumero()}.`);

        this._plantas.forEach((planta, i) => {
            const numPlanta = i +1;
            planta.forEach((propietario, j) => {
                const numPuerta = j + 1;
                let outputLine = `Propietario del piso ${numPuerta} de la planta ${numPlanta}: `;
                if(propietario !== `Sin propietario`){
                    outputLine += `${propietario}.`;
                }
                console.log(outputLine);
            })
        })
    }
}

// --- CÓDIGO DE PRUEBA Y EJECUCIÓN (va después de la clase) ---

// 1. Instanciar los 3 objetos (Edificio A, B y C)
const edificioA = new Edificio("Garcia Prieto", 58, 15706);
const edificioB = new Edificio("Camino Caneiro", 29, 32004);
const edificioC = new Edificio("San Clemente", "s/n", 15705);

console.log("---");

// 2. Consultas iniciales
console.log(`El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}.`);
console.log(`La calle del edificio C es: ${edificioC.imprimeCalle()}.`);
console.log(`El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}.`);

console.log("---");

// 3. Agregar 2 plantas y 3 puertas al Edificio A
console.log("Agregamos 2 plantas y 3 puertas por planta al edificio A....");
edificioA.agregarPlantasYPuertas(2, 3); 

// 4. Asignación de propietarios para el primer listado
console.log("\n--- Agregando 4 propietarios al edificio A... ---");
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

console.log("\n--- Primer Listado ---");
edificioA.imprimePlantas();

// 5. Agregamos 1 planta más
console.log("\nAgregamos 1 planta más al edificio A...");
edificioA.agregarPlantasYPuertas(1, 3); 

// 6. Agregamos 1 propietario más en la nueva planta 3
console.log("\nAgregamos 1 propietario más al edificio A planta 3, puerta 2.");
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

// 7. Listado Final (¡Este era el paso final que faltaba!)
console.log("\n--- Listado Final de Propietarios ---");
edificioA.imprimePlantas();
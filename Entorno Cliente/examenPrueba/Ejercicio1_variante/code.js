class Hotel {
    constructor(nombre, ciudad, estrellas) {
        this._nombre = nombre;
        this._ciudad = ciudad;
        this._estrellas = estrellas;

        this._plantas = [];
        console.log(`Nuevo hotel creado: Nombre ${this._nombre}en ${this._ciudad}, Estrellas: ${this._estrellas}.`);
    }

    imprimeNombre() {
        return this._nombre;
    }

    imprimeCiudad() {
        return this._ciudad;
    }

    imprimeEstrellas() {
        return this._estrellas;
    }

    modificarNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    modificarCiudad(nuevaCiudad) {
        this._ciudad = nuevaCiudad;
    }

    modificarEstrellas(nuevasEstrellas) {
        this._estrellas = nuevasEstrellas;
    }

    //agregar plantas y habitaciones
    agregarPlantasYHabitaciones(numPlantas, habitaciones) {
        for (let i = 0; i < numPlantas; i++) {
            const nuevaPlanta = Array(habitaciones).fill("Libre");
            this._plantas.push(nuevaPlanta);
        }
    }

    agregarHuesped(nombre, planta, habitacion) {
        //convertimos la planta(empiezan en 1) a indice(empiezan en 0)
        const indicePlanta = planta - 1;
        const indiceHabitacion = habitacion - 1;

        if (indicePlanta < 0 || indicePlanta >= this._plantas.length) {
            console.log(`ERROR: La planta ${planta} no es válida.`);
            return;
        }
        if (!indiceHabitacion < 0 || indiceHabitacion >= this._plantas[indicePlanta].length) {
            console.log(`ERROR: La habitación ${habitacion} no es válida.`);
            return;
        }
        this._plantas[indicePlanta][indiceHabitacion] = nombre;
        console.log(`${nombre} es ahora el huésped de la habitación ${habitacion}, en la planta ${planta}.`)
    }

    imprimePlantas(){
        console.log(`Listado de huéspedes del hotel ${this._nombre}:`);
        this._plantas.forEach((planta,i) => {
            const numPlanta = i + 1;
            planta.forEach((huesped,j) => {
                const numHabitacion = j + 1;
                console.log(`Planta ${numPlanta}, Habitación ${numHabitacion}: ${huesped}`);
            });
        });
    }
}

//codigo uso
const hotelA = new Hotel("Costa Azul","Barcelona", 4);
const hotelB = new Hotel("Mirador Real","Madrid",5);

console.log("---");

console.log(`El hotel ${hotelA.imprimeNombre()} está en ${hotelA.imprimeCiudad()} y tiene ${hotelA.imprimeEstrellas()} estrellas.`);
console.log(`El hotel ${hotelB.imprimeNombre()} tiene ${hotelB.imprimeEstrellas()} estrellas.`);

// Agregar plantas y habitaciones
hotelA.agregarPlantasYHabitaciones(2, 3);

// Agregar huéspedes
hotelA.agregarHuesped("Laura Pérez", 1, 1);
hotelA.agregarHuesped("Mario Sánchez", 1, 2);
hotelA.agregarHuesped("Ana Torres", 1, 3);
hotelA.agregarHuesped("Sofía Ruiz", 2, 2);

// Imprimir listado de huéspedes
hotelA.imprimePlantas();
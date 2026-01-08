class CentroComercial {
    constructor(nombre, ciudad, numTiendas) {
        this._nombre = nombre;
        this._ciudad = ciudad;
        this._numTiendas = numTiendas;

        this._plantas = [];
        console.log(`Nuevo centro comercial creado: ${this._nombre} en ${this._ciudad}, con capacidad para ${this._numTiendas} tiendas.`);
    }

    imprimeNombre() {
        return this._nombre;
    }

    imprimeCiudad() {
        return this._ciudad;
    }

    imprimeNumTiendas() {
        return this._numTiendas;
    }

    modificarNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    modificarCiudad(nuevaCiudad) {
        this._ciudad = nuevaCiudad;
    }

    modificarNumTiendas(nuevoNumTiendas) {
        this._numTiendas = nuevoNumTiendas;
    }

    añadirPlantasYLocales(numPlantas, locales) {
        for (let i = 0; i < numPlantas; i++) {
            const nuevaPlanta = Array(locales).fill("Libre");
            this._plantas.push(nuevaPlanta);
        }
    }

    añadirTienda(nombreTienda, planta, local) {
        const indicePlanta = planta - 1;
        const indiceLocal = local - 1;

        if (indicePlanta < 0 || indicePlanta >= this._plantas.length) {
            console.log(`ERROR: La planta ${planta} no existe.`);
            return;
        }

        if (indiceLocal < 0 || indiceLocal >= this._plantas[indicePlanta].length) {
            console.log(`ERROR: El local ${local} no existe en la planta ${planta}.`);
            return;
        }

        this._plantas[indicePlanta][indiceLocal] = nombreTienda;
        console.log(`${nombreTienda} ha abierto en el local ${local} de la planta ${planta}.`)
    }


    imprimePlantas() {
        console.log(`Listado de tiendas en el Centro Comercial ${this._nombre}: `);

        this._plantas.forEach((plantas, i) => {
            const numPlanta = i + 1;
            plantas.forEach((tienda, j) => {
                const numLocal = j + 1;
                console.log(`Planta ${numPlanta}, local ${numLocal}: ${tienda}.`)
            });
        });
    }
}

const centroComercial = new CentroComercial("As Cancelas", "Santiago", 100);

centroComercial.añadirPlantasYLocales(2, 3);

centroComercial.añadirTienda("Zara", 1, 1);
centroComercial.añadirTienda("Game", 2, 3);

centroComercial.imprimePlantas();



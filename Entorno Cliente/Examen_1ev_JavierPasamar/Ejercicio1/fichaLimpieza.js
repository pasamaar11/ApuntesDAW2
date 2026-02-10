class Limpieza{
    constructor (nombre,calle, numero, codigoPostal){
        this._nombre = nombre;
        this._calle = calle;
        this._numero = numero;
        this._codigoPostal = codigoPostal;


        this._servicios = [];
        console.log(`Creada nueva ficha de servicios de limpieza a domicilio: ${this._nombre}, Calle: ${this._calle}, nº: ${this._numero}, CP: ${this._codigoPostal}.`);
    }

    imprimeNombre(){
        return this._nombre;
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
    modificarNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    modificarDireccion(nuevaCalle, nuevoNumero,nuevoCodigoPostal){
        this._calle = nuevaCalle;
        this._numero = nuevoNumero;
        this._codigoPostal = nuevoCodigoPostal;
    }

    asignarServicios(){
        let hoy = new Date();
        let hoyAño = hoy.getFullYear();
        let hoyMes = hoy.getMonth();
        let hoyDia = hoy.getDate();
        let fecha_Año = hoyAño;
        let fecha_Mes = hoyMes;
        let fecha_Dia = hoyDia;

        let duracion_ = "1 hora"
        let listaPersonas = [
    "Javier","Lili","Diana","MarcosU","MarcosZ","Fran","SergioV",
    "SergioL","Carlos","David","Dario","Jhonathan","MiguelO","MiguelR",
    "Jose","Sara","Alexis","Jorge","David","Martin"
];
        let persona = Math.floor(Math.random() * listaPersonas.length);
        let servicioA = listaPersonas[persona];

        let listaTipos = [
    "fregar","escobar","un completo","trapear","hacer baños"];
        let servicio = Math.floor(Math.random() * listaTipos.length);
        let es = listaTipos[servicio];
        console.log(`Fecha: ${fecha_Año}/${fecha_Mes}/${fecha_Dia}, la duración es: ${duracion_} para ${servicioA}, y se trata de ${es} `)
    }
}

const servicioA = new Limpieza("Limpiezas Zaragoza", "Mayor", 15706, 50001);

console.log("---");

console.log(`El código postal de ${servicioA.imprimeNombre()} es: ${servicioA.imprimeCodigoPostal()}.`);
console.log(`La calle es: ${servicioA.imprimeCalle()}.`);

console.log("---");
servicioA.asignarServicios();
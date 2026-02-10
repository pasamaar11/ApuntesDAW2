document.addEventListener('DOMContentLoaded', () => {
    const datos = {
        nombreEquipo: document.getElementById('nombreEquipo'),
        totalAlumnos: document.getElementById('totalAlumnos'),
        miembrosEquipo: document.getElementById('miembrosEquipo'),
        btnGenerar: document.getElementById('btnGenerar'),
        resultado: document.getElementById('resultado'),
        errorNombre: document.getElementById('errorNombre'),
        errorTotal: document.getElementById('errorTotal'),
        errorMiembros: document.getElementById('errorMiembros')
    };

    function validarNombreEquipo(valor){
        return /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]{1,8}$/.test(valor);
    }

    function validarTotalAlumnos(valor){
        return /^\d{1,8}$/.test(valor);
    }

    function validarCampos(){
        let errores = [];
        let valido = true;

        if(!datos.nombreEquipo.value || !datos.totalAlumnos.value || !datos.miembrosEquipo.value){
            errores.push("Se debe escribir el nombre del equipos, el total de alumnos y los miembros del equipo.");
            valido = false;
        }

        if(datos.nombreEquipo.value && !validarNombreEquipo(datos.nombreEquipo.value)){
            errores.push("El nombre del equipo debe contener entre 1 y 8 caracteres y no tener números.");
            valido = false;
        }

        if(datos.totalAlumnos.value && !validarTotalAlumnos(datos.totalAlumnos.value)){
            errores.push("No puede tener más de 8 caracteres.");
            valido = false;
        }

        if(datos.miembrosEquipo.value > datos.totalAlumnos.value){
            errores.push("No puede haber más miembros de lo que el total de alumnos es.")
            valido = false;
        }

        datos.resultado.className = 'resultado';
        if(errores.length > 0){
            datos.resultado.classList.add('error');
            datos.resultado.innerHTML = `${errores.join('<br/>')}`;
            datos.btnGenerar.disabled = true;
        }else if(valido){
            datos.resultado.classList.add('success');
            datos.resultado.innerHTML = "Datos válidos.";
            datos.btnGenerar.disabled = false;
        }
        return valido;
    }

    function alumnosPorEquipo(){
        let listaAlumnos = [
    "Javier","Lili","Diana","MarcosU","MarcosZ","Fran","SergioV",
    "SergioL","Carlos","David","Dario","Jhonathan","MiguelO","MiguelR",
    "Jose","Sara","Alexis","Jorge","David","Martin"
];

    const indiceGanador = Math.floor(Math.random() * listaAlumnos.length);
    const ganador = listaAlumnos[indiceGanador];

    listaAlumnos.splice(indiceGanador, 1);
    if (listaAlumnos.length === 0) {
        alert("No hay más alumnos para reubicar de equipo.");
        return;
    }
    const equipo = [];
    equipo.push(ganador);

    // Eliminar ganador del array
    //El splice elimina el primer parametro, el segundo parametro  sirve para decirle cuantos elementos eliminamos desde el primer elemento
    

    console.log(`${datos.nombreEquipo.value}: ${equipo}`);
}


    Object.values(datos).forEach(campo => {
        if(campo.tagName == 'INPUT'){
            campo.addEventListener('input', validarCampos);
        }
    });

    datos.btnGenerar.addEventListener('click', () => {
        datos.btnGenerar.disabled = true;
        const numAleatorios = Math.random() * 1 + totalAlumnos.length;
        let listaNumeros = [numAleatorios];
        datos.resultado.innerHTML = "Creacion equipo realizada.";
        console.log(alumnosPorEquipo());

    });

    validarCampos();
});
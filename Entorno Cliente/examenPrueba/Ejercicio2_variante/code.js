//llamamos a los elementos del DOM
document.addEventListener('DOMContentLoaded', () => {
    const camposReserva = {
        nombre: document.getElementById('nombreReserva'),
        telefono: document.getElementById('telefono'),
        email: document.getElementById('emailReserva'),
        codigo: document.getElementById('codigoReserva'),
        fecha: document.getElementById('fechaLlegada'),
        btnConfirmar: document.getElementById('btnConfirmar'),
        mensaje: document.getElementById('msgReserva')
    };

    const camposPago = {
        tarjeta: document.getElementById('numTarjeta'),
        cvv: document.getElementById('cvv'),
        titular: document.getElementById('titularTarjeta'),
        btnPagar: document.getElementById('btnPagar'),
        mensaje: document.getElementById('msgPago')
    };

    camposReserva.btnConfirmar.disabled = true;
    camposPago.btnPagar.disabled = true;


//implementamos funciones de validacion
function validarTelefono(valor){
//^ --> inicio  \d --> digitos  {9} --> 9 veces   $--> fin
//TODO VA ENTRE / 
// .test devuelve true or false, de si la validacion esta en valor
    return /^\d{9}$/.test(valor);
}

function validarNombreReserva(valor){
//. --> todos caracteres  {3,10}--> entre 3 y 10 veces

    return /^.{3,10}$/.test(valor);
}

function validarEmailReserva(valor){
//debe tener @ y .com o .es
//la i despues de $/ se pone para declarar que es case insensitive
    return /^.+@.*\.(com|es)$/i.test(valor);
}

function validarCodigoReserva(valor){
//debe tener 3 letras(mayus o minus) y 4 digitos seguidos
    return /^[A-Za-z]{3}\d{4}$/.test(valor);
}

function validarFecha(valor){
    //comprueba que no está vacio
    //trim devuelve string sin espacios en blanco
    return valor.trim().length > 0;
}

// Funciones de PAGO
    function validarTarjeta(valor) {
        return /^\d{16}$/.test(valor);
    }

    function validarCVV(valor) {
        return /^\d{3,4}$/.test(valor);
    }

    function validarTitular(valor) {
        return /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]{3,}$/.test(valor);
    }

function validarCamposReserva() {
    let errores = [];
    let valido = true;

    // Comprobación de obligatoriedad (usando camposReserva.propiedad)
    if (!camposReserva.nombre.value || !camposReserva.telefono.value || !camposReserva.email.value || !camposReserva.codigo.value || !camposReserva.fecha.value) {
        errores.push("Todos los campos de reserva son obligatorios.");
        valido = false;
    }

    // Comprobación de reglas específicas
    if (camposReserva.nombre.value && !validarNombreReserva(camposReserva.nombre.value)) {
        errores.push("El nombre debe tener entre 3 y 10 caracteres.");
        valido = false;
    }

    if (camposReserva.telefono.value && !validarTelefono(camposReserva.telefono.value)) {
        errores.push("El teléfono debe tener 9 dígitos.");
        valido = false;
    }

    if (camposReserva.email.value && !validarEmailReserva(camposReserva.email.value)) {
        errores.push("El email debe ser válido y acabar en .com o .es.");
        valido = false;
    }

    if (camposReserva.codigo.value && !validarCodigoReserva(camposReserva.codigo.value)) {
        errores.push("El código debe ser: 3 letras + 4 números (ej: ABC1234).");
        valido = false;
    }
    
    // (La comprobación de fecha no necesita corrección aquí, ya que ya usa camposReserva.fecha)

    // Mostrar mensajes y habilitar botón
    camposReserva.mensaje.className = 'mensaje';
    if (errores.length > 0) {
        camposReserva.mensaje.classList.add('error');
        // Usamos <br> y emoji para separar los errores
        camposReserva.mensaje.innerHTML = `${errores.join('<br/>')}`;
        camposReserva.btnConfirmar.disabled = true;
    } else if (valido) {
        camposReserva.mensaje.classList.add('success');
        camposReserva.mensaje.innerHTML = "Datos válidos.";
        camposReserva.btnConfirmar.disabled = false;
    }

    return valido;
}

Object.values(camposReserva).forEach(campo => {
    if(campo.tagName == 'INPUT'){
        campo.addEventListener('input', validarCamposReserva);
    }
});

// Evento del botón de Confirmar Reserva
    camposReserva.btnConfirmar.addEventListener('click', () => {
        camposReserva.btnConfirmar.disabled = true;
        camposPago.btnPagar.disabled = false;
        camposReserva.mensaje.innerHTML = "Reserva confirmada. Proceda al pago.";
    });

    // Ejecución inicial (para deshabilitar si está vacío)
    validarCamposReserva();

    // --- LÓGICA DE PAGO (Paso 4, que faltaba) ---
    // AÑADE AQUÍ LOS BLOQUES DE VALIDACIÓN DE PAGO DEL PUNTO 2
    camposPago.btnPagar.addEventListener('click', (e) => {
        e.preventDefault(); 

        let errores = [];
        const{
            tarjeta, cvv, titular, btnPagar, mensaje
        } = camposPago;
        let valido = true;

        // 1. Verificar OBLIGATORIEDAD
        if (!tarjeta.value || !cvv.value || !titular.value) {
            errores.push("Todos los campos de pago son obligatorios.");
            valido = false;
        }

        // 2. Verificar REGLAS ESPECÍFICAS
        if (tarjeta.value && !validarTarjeta(tarjeta.value)) {
            errores.push("Número de Tarjeta debe tener 16 dígitos.");
            valido = false;
        }
        if (cvv.value && !validarCVV(cvv.value)) {
            errores.push("CVV debe tener 3 o 4 dígitos.");
            valido = false;
        }
        if (titular.value && !validarTitular(titular.value)) {
            errores.push("Titular debe tener al menos 3 letras.");
            valido = false;
        }

        // 3. Mostrar mensajes y finalizar
        mensaje.className = 'mensaje'; 
        if (errores.length > 0) {
            mensaje.classList.add('error');
            mensaje.innerHTML = `Error en el pago. ${errores.join('<br/>')}`;
        } else if(valido){
            mensaje.classList.add('success');
            mensaje.innerHTML = "Pago realizado con éxito. Reserva finalizada.";
            btnPagar.disabled = true; // Deshabilitar el botón al finalizar el proceso
        }
    });
    
    // Ejecución inicial (necesaria para deshabilitar el botón si está vacío al cargar)
    validarCamposReserva();

});
// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. OBTENEMOS LOS ELEMENTOS DEL DOM ---
    const camposDatos = {
        nombre: document.getElementById('nombre'),
        apellido: document.getElementById('apellido'),
        email: document.getElementById('email'),
        usuario: document.getElementById('usuario'),
        idAlumno: document.getElementById('idAlumno'),
        btnHabilitar: document.getElementById('btnHabilitar'),
        mensaje: document.getElementById('msgDatos')
    };

    const camposMatricula = {
        codigoCurso: document.getElementById('codigoCurso'),
        nivel: document.getElementById('nivel'),
        clave: document.getElementById('claveAcceso'),
        btnEnviar: document.getElementById('btnEnviar'),
        mensaje: document.getElementById('msgMatricula')
    };

    camposDatos.btnHabilitar.disabled = true;
    camposMatricula.btnEnviar.disabled = true;


    // --- 2. VALIDACIONES DE DATOS PERSONALES ---

    function validarNombre(valor) {
        return /^[A-Za-zñÑáéíóúÁÉÍÓÚ]{2,}$/.test(valor);
    }

    function validarApellido(valor) {
        return /^[A-Za-zñÑáéíóúÁÉÍÓÚ]{2,}$/.test(valor);
    }

    function validarEmail(valor) {
        return /^.+@.+\..+$/.test(valor);
    }

    function validarUsuario(valor) {
        return /^.{5,8}$/.test(valor);
    }

    function validarID(valor) {
        // EJEMPLO: ABC123456 (3 letras + 6 números)
        return /^[A-Za-z]{3}\d{6}$/.test(valor);
    }


    // --- 3. VALIDACIÓN GLOBAL PARA HABILITAR MATRÍCULA ---
    function validarCamposDatos() {
        let errores = [];
        let valido = true;

        const { nombre, apellido, email, usuario, idAlumno, btnHabilitar, mensaje } = camposDatos;

        if (!nombre.value || !apellido.value || !email.value || !usuario.value || !idAlumno.value) {
            errores.push("Todos los campos son obligatorios.");
            valido = false;
        }

        if (nombre.value && !validarNombre(nombre.value)) {
            errores.push("El nombre debe tener al menos 2 letras.");
            valido = false;
        }

        if (apellido.value && !validarApellido(apellido.value)) {
            errores.push("El apellido debe tener al menos 2 letras.");
            valido = false;
        }

        if (email.value && !validarEmail(email.value)) {
            errores.push("El email no es válido.");
            valido = false;
        }

        if (usuario.value && !validarUsuario(usuario.value)) {
            errores.push("El usuario debe tener entre 5 y 8 caracteres.");
            valido = false;
        }

        if (idAlumno.value && !validarID(idAlumno.value)) {
            errores.push("El ID debe ser 3 letras + 6 números.");
            valido = false;
        }

        mensaje.className = 'mensaje';

        if (errores.length > 0) {
            mensaje.classList.add('error');
            mensaje.innerHTML = errores.join("<br>");
            btnHabilitar.disabled = true;
        } else {
            mensaje.classList.add('success');
            mensaje.innerHTML = "Datos correctos. Puede habilitar la matrícula.";
            btnHabilitar.disabled = false;
        }

        return valido;
    }

    // Escuchamos cambios en los inputs
    Object.values(camposDatos).forEach(campo => {
        if (campo.tagName === "INPUT") {
            campo.addEventListener('input', validarCamposDatos);
        }
    });


    // --- 4. EVENTO PARA ACTIVAR LA MATRÍCULA ---
    camposDatos.btnHabilitar.addEventListener('click', () => {
        camposMatricula.btnEnviar.disabled = false;
        camposDatos.mensaje.innerHTML = "Matrícula habilitada. Complete los siguientes datos.";
    });


    // --- 5. VALIDACIONES DE MATRÍCULA ---
    function validarCodigoCurso(valor) {
        return /^[A-Z]{4}\d{2}$/.test(valor); // Ej: HTML01
    }

    function validarNivel(valor) {
        return /^(básico|intermedio|avanzado)$/i.test(valor);
    }

    function validarClave(valor) {
        return valor.trim().length > 0;
    }


    // --- 6. ENVÍO DE FORMULARIO ---
    camposMatricula.btnEnviar.addEventListener('click', e => {
        e.preventDefault();

        const { codigoCurso, nivel, clave, btnEnviar, mensaje } = camposMatricula;
        let errores = [];
        let valido = true;

        if (!codigoCurso.value || !nivel.value || !clave.value) {
            errores.push("Todos los campos de matrícula son obligatorios.");
            valido = false;
        }

        if (codigoCurso.value && !validarCodigoCurso(codigoCurso.value)) {
            errores.push("Código curso inválido (ej: HTML01).");
            valido = false;
        }

        if (nivel.value && !validarNivel(nivel.value)) {
            errores.push("Nivel debe ser: básico, intermedio o avanzado.");
            valido = false;
        }

        if (clave.value && !validarClave(clave.value)) {
            errores.push("La clave no puede estar vacía.");
            valido = false;
        }

        mensaje.className = 'mensaje';

        if (errores.length > 0) {
            mensaje.classList.add('error');
            mensaje.innerHTML = errores.join("<br>");
        } else {
            mensaje.classList.add('success');
            mensaje.innerHTML = "Matrícula completada con éxito.";
            btnEnviar.disabled = true;
        }
    });

    // Ejecución inicial
    validarCamposDatos();

});

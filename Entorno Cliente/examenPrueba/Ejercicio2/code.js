document.addEventListener('DOMContentLoaded', () => {
    // --- 1. REFERENCIAS DEL DOM ---
    const camposUsuario = {
        nombre: document.getElementById('nombre'),
        apellidos: document.getElementById('apellidos'),
        email: document.getElementById('email'),
        usuario: document.getElementById('usuario'),
        dni: document.getElementById('dni'),
        btnHabilitar: document.getElementById('btn-habilitar-banco'),
        mensaje: document.getElementById('mensaje-usuario')
    };

    const camposBanco = {
        iban: document.getElementById('iban'),
        ccc: document.getElementById('ccc'),
        contrasena: document.getElementById('contrasena'),
        btnEnviar: document.getElementById('btn-enviar'),
        mensaje: document.getElementById('mensaje-banco')
    };

    // --- 2. FUNCIONES DE VALIDACIÓN INDIVIDUALES ---

    /**
     * Valida si el campo tiene al menos 2 caracteres no numéricos.
     */
    function validarMin2Letras(valor) {
        // Expresión: 2 o más letras (incluyendo acentos y ñ), permitiendo espacios.
        return /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]{2,}$/.test(valor);
    }

    /**
     * Valida que el usuario tenga entre 5 y 8 caracteres.
     */
    function validarUsuario(valor) {
        return valor.length >= 5 && valor.length <= 8;
    }

    /**
     * Valida que el email contenga el símbolo @.
     */
    function validarEmail(valor) {
        return /@/.test(valor);
    }

    /**
     * Valida el DNI con el algoritmo de la letra.
     */
    function validarDNI(dni) {
        const regexDNI = /^\d{8}[A-Z]$/;
        if (!regexDNI.test(dni)){
            return false;
        }

        const numero = dni.substr(0, 8);
        const letra = dni.substr(8, 1).toUpperCase();
        const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const letraCalculada = letrasValidas.charAt(numero % 23);

        return letra === letraCalculada;
    }
    
    /**
     * Valida que el IBAN contenga ES y 2 números (ESXX).
     */
    function validarIBAN(iban) {
        return /^ES\d{2}$/.test(iban);
    }

    /**
     * Valida que el CCC contenga exactamente 20 números.
     */
    function validarCCC(ccc) {
        return /^\d{20}$/.test(ccc);
    }

    // --- 3. FUNCIÓN DE VALIDACIÓN MAESTRA (USUARIO) ---

    function validarTodosLosCamposUsuario() {
        let errores = [];
        const { nombre, apellidos, email, usuario, dni } = camposUsuario;
        let valido = true;

        // Validaciones de OBLIGATORIEDAD (Todos los campos deben estar rellenos)
        if (!nombre.value || !apellidos.value || !email.value || !usuario.value || !dni.value) {
            errores.push("Todos los campos son obligatorios.");
            valido = false;
        }

        // Validaciones específicas
        if (nombre.value && !validarMin2Letras(nombre.value)) {
            errores.push("Nombre debe tener al menos 2 caracteres no numéricos.");
            valido = false;
        }
        if (apellidos.value && !validarMin2Letras(apellidos.value)) {
            errores.push("Apellido debe tener al menos 2 caracteres no numéricos.");
            valido = false;
        }
        if (email.value && !validarEmail(email.value)) {
            errores.push("Email debe contener '@'.");
            valido = false;
        }
        if (usuario.value && !validarUsuario(usuario.value)) {
            errores.push("Usuario debe contener entre 5 y 8 caracteres.");
            valido = false;
        }
        if (dni.value && !validarDNI(dni.value)) {
            errores.push("El DNI no es válido.");
            valido = false;
        }

        // Mostrar avisos (Experiencia del Usuario - 0.75 pts)
        camposUsuario.mensaje.className = 'mensaje'; // Limpiar clases
        if (errores.length > 0) {
            camposUsuario.mensaje.classList.add('error');
            camposUsuario.mensaje.innerHTML = `${errores.join(' ')}`;
            camposUsuario.btnHabilitar.disabled = true;
        } else if (valido) {
            camposUsuario.mensaje.classList.add('success');
            camposUsuario.mensaje.innerHTML = "Todos los datos de usuario son válidos.";
            camposUsuario.btnHabilitar.disabled = false; // Habilitar el botón (0.75 pts)
        }
        
        return valido;
    }

    // --- 4. EVENT LISTENERS DE USUARIO ---

    // Validar cada vez que el usuario escribe o sale del campo
    Object.values(camposUsuario).forEach(campo => {
        if (campo.tagName === 'INPUT') {
            campo.addEventListener('input', validarTodosLosCamposUsuario);
            campo.addEventListener('blur', validarTodosLosCamposUsuario);
        }
    });

    // Evento del botón Habilitar Banco
    camposUsuario.btnHabilitar.addEventListener('click', () => {
        if (validarTodosLosCamposUsuario()) {
            camposUsuario.btnHabilitar.disabled = true;
            camposBanco.btnEnviar.disabled = false; // Habilitar el botón "Enviar" (1.5 pts)
            camposUsuario.mensaje.innerHTML = "Módulo bancario habilitado. ¡Puede Enviar los datos!";
        }
    });

    // --- 5. LÓGICA DE ENVÍO Y VALIDACIÓN BANCARIA ---

    camposBanco.btnEnviar.addEventListener('click', (e) => {
        e.preventDefault(); // Detener el envío del formulario

        let errores = [];
        const { iban, ccc, contrasena } = camposBanco;

        // Validar IBAN
        if (!validarIBAN(iban.value)) {
            errores.push("IBAN debe ser 'ES' seguido de 2 números.");
        }
        
        // Validar CCC
        if (!validarCCC(ccc.value)) {
            errores.push("CCC debe tener 20 números.");
        }
        
        // Validar Contraseña (no vacía)
        if (contrasena.value.length === 0) {
            errores.push("La contraseña no puede estar vacía.");
        }

        // Mostrar resultado (Validar "Enviar los datos" - 0.5 pts)
        camposBanco.mensaje.className = 'mensaje'; 
        if (errores.length > 0) {
            camposBanco.mensaje.classList.add('error');
            camposBanco.mensaje.innerHTML = `Error al enviar. ${errores.join(' ')}`;
        } else {
            // Envío exitoso (1.5 pts)
            camposBanco.mensaje.classList.add('success');
            camposBanco.mensaje.innerHTML = `Datos enviados con éxito. ¡Todo validado!`;
            // Aquí se simularía el envío final de los datos.
            
            // Opcional: Deshabilitar el botón Enviar después del éxito
            // camposBanco.btnEnviar.disabled = true;
        }
    });

    // Iniciar deshabilitado para forzar la validación inicial
    camposUsuario.btnHabilitar.disabled = true; 
    camposBanco.btnEnviar.disabled = true;
    
    // Ejecutar la validación inicial al cargar para mostrar el estado
    validarTodosLosCamposUsuario();
});
window.addEventListener('DOMContentLoaded', () => {

    const visorPrincipal = document.getElementById('visor-principal');
    const visorSecundario = document.getElementById('visor-secundario');
    const botonesNumero = document.querySelectorAll('[data-numero]');
    const botonesOperador = document.querySelectorAll('[data-operador]');
    const botonIgual = document.getElementById('btn-igual');
    const botonBorrar = document.getElementById('btn-borrar');
    const botonInfo = document.getElementById('btn-info');
    const botonAyuda = document.getElementById('btn-ayuda');

    let operandoActual = '0';
    let operandoAnterior = '';
    let operacion = undefined;

    const actualizarVisor = () => {
        visorPrincipal.textContent = operandoActual;
        visorSecundario.textContent = operandoAnterior + (operacion || "");
    };

    const agregarNumero = (num) => {
        if (num === '.' && operandoActual.includes('.')) return;
        if (operandoActual === '0' && num !== '.') {
            operandoActual = num;
        } else {
            operandoActual += num;
        }
        actualizarVisor();
    };

    const elegirOperacion = (op) => {
        if (operandoActual === '') return;
        if (operandoAnterior !== '') {
            calcular();
        }
        operacion = op;
        operandoAnterior = operandoActual;
        operandoActual = '';
        actualizarVisor();
    };

    const calcular = () => {
        const anterior = parseFloat(operandoAnterior);
        const actual = parseFloat(operandoActual);
        if (isNaN(anterior) || isNaN(actual)) return;

        let resultado;

        switch (operacion) {
            case '+': resultado = anterior + actual; break;
            case '-': resultado = anterior - actual; break;
            case '*': resultado = anterior * actual; break;
            case '/':
                if (actual === 0) {
                    resultado = 'Error';
                } else {
                    resultado = anterior / actual;
                }
                break;
            default: return;
        }

        operandoActual = resultado.toString();

        localStorage.setItem('ultimoResultadoCalculadora', operandoActual);

        operacion = undefined;
        operandoAnterior = '';
        actualizarVisor();
    };

    const limpiar = () => {
        operandoActual = '0';
        operandoAnterior = '';
        operacion = undefined;
        actualizarVisor();
    };

    // Números
    botonesNumero.forEach(btn => {
        btn.addEventListener('click', () => agregarNumero(btn.dataset.numero));
    });

    // Operadores — aquí está la corrección: usamos data-operador
    botonesOperador.forEach(btn => {
        btn.addEventListener('click', () => elegirOperacion(btn.dataset.operador));
    });

    // Igual
    botonIgual.addEventListener('click', calcular);

    // Cargar último resultado guardado
    const ultimoResultadoGuardado = localStorage.getItem('ultimoResultadoCalculadora');
    if (ultimoResultadoGuardado) {
        visorSecundario.textContent = "Último resultado: " + ultimoResultadoGuardado;
    }

    // Info sistema
    botonInfo.addEventListener('click', () => {
        const infoSistema =
            `Navegador: ${navigator.userAgent}
Plataforma: ${navigator.platform}
Resolución: ${screen.width}x${screen.height}`;
        window.alert(infoSistema);
    });

    // Borrado inteligente
    botonBorrar.addEventListener('click', () => {
        const confirmar = window.confirm("¿Seguro que quieres borrar la memoria?");
        if (confirmar) {
            localStorage.removeItem('ultimoResultadoCalculadora');
            location.reload();
        }
    });

    // Ayuda
    botonAyuda.addEventListener('click', () => {
        window.open("https://developer.mozilla.org/es/docs/Web/JavaScript", "_blank");
    });

    actualizarVisor();
});

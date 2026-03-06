document.addEventListener('DOMContentLoaded', () => {
    const inputCadena = document.getElementById('cadena');
    const inputCadenaInvertida = document.getElementById('cadenaInvertida');
    const inputCadenaInvertida2 = document.getElementById('cadenaInvertida2');
    const botonInvertir = document.getElementById('botonInvertir');
    const formulario = document.getElementById('formulario-inversion');

    function invertirTexto(texto) {
        return texto.split('').reverse().join('');
    }

    function actualizarEstado() {
        const valor = inputCadena.value;
        inputCadenaInvertida2.value = invertirTexto(valor);
        botonInvertir.hidden = valor.length <= 3;

        if (valor.length <= 3) {
            inputCadenaInvertida.value = '';
        }
    }

    inputCadena.addEventListener('input', actualizarEstado);

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const valor = inputCadena.value;

        if (valor.length > 3) {
            inputCadenaInvertida.value = invertirTexto(valor);
        }
    });

    actualizarEstado();
});

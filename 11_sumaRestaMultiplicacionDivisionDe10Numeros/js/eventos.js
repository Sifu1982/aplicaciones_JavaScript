let numeroValores = document.querySelector('#titulo');
let input = document.querySelector('input');
let boton = document.querySelector('a');
let lis = document.getElementsByTagName('li');

const numeroValoresIntroducidosXUsuario = 4;
const numeroDecimales = 5;

numeroValores.innerText = numeroValoresIntroducidosXUsuario;

boton.addEventListener('click', capturarBoton);

input.value = '';
input.focus();

let arrayUsuario = [];
let contador = 0;

function capturarBoton(event) {
    event.preventDefault();

    if (input.value != '' && !isNaN(input.value)) {
        arrayUsuario.push(parseFloat(input.value));
        input.placeholder = 'Introduce OTRO número';
        contador++;
    } else {
        alert('¡¡¡Introduce un valor numérico válido!!!  Para escribir un número decimal usa el símbolo  "."');
        input.placeholder = 'Introduce un valor válido';
    };
    input.value = '';
    input.focus();

    if (contador == numeroValoresIntroducidosXUsuario - 1) {
        input.placeholder = 'Introduce el ÚLTIMO número';
    };

    if (contador == numeroValoresIntroducidosXUsuario) {
        for (let i = 0; i < lis.length; i++) {
            lis[i].innerText = `La operación ${calcular(arrayUsuario)[i + 5]} es: ${calcular(arrayUsuario)[i].toFixed(numeroDecimales)}`
        };
        boton.innerHTML = '';
        input.parentElement.remove(input);
    };
};



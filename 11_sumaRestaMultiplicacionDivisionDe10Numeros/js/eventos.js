let numeroValores = document.querySelector('.titulo');
let input = document.querySelector('input');
let boton = document.querySelector('a');
let lis = document.getElementsByTagName('li');

const numeroValoresIntroducidosXUsuario = 4;


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
        input.placeholder = 'Introduce otro número';
        contador++;
    } else {
        alert('Introduce un valor numérico válido');
    };
    input.value = '';
    input.focus();

    if (contador == numeroValoresIntroducidosXUsuario) {
        for (let i = 0; i < lis.length; i++) {
            lis[i].innerText = `La operación ${calcular(arrayUsuario)[i + 5]} es: ${calcular(arrayUsuario)[i].toFixed(2)}`
        };
        boton.innerHTML = '';
        input.parentElement.remove(input);
    };
};



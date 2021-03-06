let numeroCalcular = document.querySelector('#texto');
let boton = document.querySelector('#boton');
let numeroDeMultiplos = document.querySelector('#numerodemultiplos');
let strong = document.querySelector('strong');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');

numeroCalcular.value = '';
numeroDeMultiplos.value = '';
numeroDeMultiplos.focus();

boton.addEventListener('click', capturarBoton);

function capturarBoton(event) {
    //Condición para no continuar si el usuario introduce texto
    if (isNaN(numeroDeMultiplos.value)) {
        numeroDeMultiplos.placeholder = 'No puedes introducir texto';
        numeroDeMultiplos.value = '';
    };
    if (isNaN(numeroCalcular.value)) {
        numeroCalcular.placeholder = 'No puedes introducir texto';
        numeroCalcular.value = '';
    };
    //Condición para que no "pinte" nada si los campos de texto se encuentran vacíos
    if (numeroDeMultiplos.value == '' || numeroCalcular.value == '') {
    } else if (numeroDeMultiplos.value >= 1) {
        pintarMultiplos(calcularNPrimerosMultpiplos(numeroCalcular.value, numeroDeMultiplos.value));
        pintarSumaMultipos(sumarPosicionesArray(calcularNPrimerosMultpiplos(numeroCalcular.value, numeroDeMultiplos.value)));
        strong.innerText = numeroDeMultiplos.value;
        span1.innerText = 'AHORA';
        span2.innerText = ' ' + numeroCalcular.value + ', que da: ' + sumarPosicionesArray(calcularNPrimerosMultpiplos(numeroCalcular.value, numeroDeMultiplos.value));
        numeroCalcular.value = '';
        numeroDeMultiplos.value = '';
    } else {
        alert('N tiene que ser mayor o igual a 1');
        numeroDeMultiplos.value = '';
    };
    numeroDeMultiplos.focus();
};



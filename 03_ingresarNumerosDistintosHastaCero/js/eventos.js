let boton = document.querySelector('#boton');


boton.addEventListener('click', capturarNumeros);

function capturarNumeros(event) {
    if (!isNaN(numeros.value)) {
        pintarUnNumero(numeros.value);
    } else {
        numeros.placeholder = 'No puedes introducir nada de texto';
    };
    numeros.value = '';
    numeros.focus();
};
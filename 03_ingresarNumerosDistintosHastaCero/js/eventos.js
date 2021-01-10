let boton = document.querySelector('#boton');


boton.addEventListener('click', capturarNumeros);

function capturarNumeros(event) {
    pintarUnNumero(numeros.value);
    numeros.value = '';
    numeros.focus();
}
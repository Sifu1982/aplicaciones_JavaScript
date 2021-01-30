let input = document.querySelector('input');
let botones = document.getElementsByTagName('button');

input.value = '';
input.focus();



botones[0].addEventListener('click', capturarAlmacenar);

function capturarAlmacenar() {
    if (input.value != '') {
        isNaN(input.value) ? arrayUsuario.push(input.value) : arrayUsuario.push(parseFloat(input.value));
    };
    pintarArray(arrayUsuario);
    input.value = '';
    input.focus();
    return arrayUsuario;
};


botones[1].addEventListener('click', capturarMostrarPalabras);

function capturarMostrarPalabras() {
    if (arrayUsuario.length > 0 && arrayStringsOrdenado(arrayUsuario).length > 0) {
        pintarPalabras(arrayStringsOrdenado(arrayUsuario));
    };
    input.focus();
};



botones[2].addEventListener('click', capturarMostrarNumeros);

function capturarMostrarNumeros() {
    if (arrayUsuario.length > 0 && calculateNumbers(arrayUsuario)[0] != undefined) {
        pintarNumeros(calculateNumbers(arrayUsuario));
    };
    input.focus();
};

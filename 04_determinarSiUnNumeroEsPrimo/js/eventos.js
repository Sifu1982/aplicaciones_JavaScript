let input = document.querySelector('input');
let span = document.querySelector('span');
let strong = document.querySelector('strong');

input.value = '';
input.focus();
input.addEventListener('input', capturarInput);


function capturarInput(event) {
    span.innerText = '';
    if (input.value > 0) {
        (numeroPrimo(input.value) == false) ? strong.innerText = input.value + ' NO ' : strong.innerText = input.value + ' SÍ ';
    } else {
        input.value = '';
        input.focus();
        span.innerText = 'Te voy a decir si el número que buscas';
        strong.innerText = '';
    };
};
let button = document.getElementById('boton');
let numero = document.getElementById('numero');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');

numero.focus();

button.addEventListener('click', capturarInput);

function capturarInput(event) {
    if (numero.value >= 0) {
        pintarResultado(numero.value);
        span1.innerText = 'AHORA';
        span2.innerText = numero.value + ', que es: ' + factorial(numero.value);
    } else {
        alert('El número tiene que ser mayor o igual que 0')
    }
    numero.value = '';
    numero.focus();
};
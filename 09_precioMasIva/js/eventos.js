let inputs = document.getElementsByTagName('input');
let boton = document.querySelector('a');
let li = document.querySelector('li');

for (const input of inputs) {
    input.value = '';
};

inputs[0].focus();

boton.addEventListener('click', capturarBoton);

function capturarBoton(event) {
    event.preventDefault();
    for (const input of inputs) {
        if (isNaN(input.value) || input.value == '') {
            input.placeholder = 'Introduce un formato válido';
            input.value = '';
            input.focus();
        } else {
            li.innerText = 'El precio total a pagar es: ' + precioMasIva(inputs[0].value, inputs[1].value).toFixed(2) + ' euros';
        };
    };
};
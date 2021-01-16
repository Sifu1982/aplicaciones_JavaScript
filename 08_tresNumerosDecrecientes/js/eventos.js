let inputs = document.getElementsByTagName('input');
let boton = document.querySelector('a');
let lis = document.getElementsByTagName('li');

inputs[0].focus();

for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
}

boton.addEventListener('click', capturarBoton);

function capturarBoton(event) {
    event.preventDefault();
    for (let i = 0; i < lis.length; i++) {
        lis[i].innerHTML = ordenarNumeros(inputs[0].value, inputs[1].value, inputs[2].value,)[i];
    }
    inputs[0].focus();
};
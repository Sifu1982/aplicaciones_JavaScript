let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');

for (const input of inputs) {
    input.value = '';
};

inputs[0].focus();

button.addEventListener('click', capturarButton);

function capturarButton() {
    if (isNaN(inputs[0].value) || inputs[0].value < 0 || inputs[0].value > 99999999) {
        alert('Introduzca un número entre 0 y 99999999');
        inputs[0].value = '';
        inputs[0].focus();
    } else {
        let userNumberDNI = parseInt(inputs[0].value);
        let userLetterDNI = inputs[1].value.toUpperCase();
        if (calcularLetraDNI(userNumberDNI) == userLetterDNI) {
            alert('La letra indicada es la correcta');
            for (const input of inputs) {
                input.value = '';
            };
            inputs[0].focus();
            inputs[0].placeholder = 'Introduce otro DNI';
            inputs[1].placeholder = 'Introduce la letra del nuevo DNI';
        } else {
            alert('La letra indicada no es correcta');
            inputs[1].value = '';
            inputs[1].focus();
        };
    };
};


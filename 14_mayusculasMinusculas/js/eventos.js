let sectionInputs = document.querySelector('.inputs');
let input = document.querySelector('input');
let button = document.querySelector('button');
let sectionResultados = document.querySelector('.resultados');


input.value = '';
input.focus();

button.addEventListener('click', capturarButton);

function capturarButton() {
    if (input.value != '' && isNaN(input.value)) {
        sectionResultados.innerHTML = `<div>Las letras que componen tu texto son ${mayusculasMinusculas(input.value)}.</div>`;
        sectionInputs.innerHTML = '';
    };
    input.value = 'Debes introducir un texto, NO un número';
    input.focus();
};


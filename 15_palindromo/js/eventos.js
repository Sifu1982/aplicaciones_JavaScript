let input = document.querySelector('input');
let sectionResultados = document.querySelector('.resultados');
let button = document.querySelector('button');

input.value = '';
input.focus();

button.addEventListener('click', capturarButton);

function capturarButton() {
    let texto = '';
    switch (esPalindromo(input.value)) {
        case true:
            texto = 'SI';
            break;
        default:
            texto = 'NO';
            break;
    };
    if (input.value != '') {
        pintarResultado(texto)
    };
    input.value = '';
    input.focus();
};
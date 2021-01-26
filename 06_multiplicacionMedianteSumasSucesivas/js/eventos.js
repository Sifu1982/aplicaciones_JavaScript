let inputs = document.getElementsByTagName('input');
let span = document.querySelector('span');

inputs[0].focus();
// span.innerText = 0;

for (let input of inputs) {
    input.value = '';
};


inputs[0].addEventListener('input', capturarInputs);
inputs[1].addEventListener('input', capturarInputs);

function capturarInputs() {
    for (const input of inputs) {
        if (!isNaN(input.value)) {
            span.innerText = multiplicacioMedianteSumasSucesivas(parseFloat(inputs[0].value), parseFloat(inputs[1].value));
        };
    };
};
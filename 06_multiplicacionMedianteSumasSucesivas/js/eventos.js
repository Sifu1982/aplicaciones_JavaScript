let inputs = document.getElementsByTagName('input');
let span = document.querySelector('span');

inputs[0].focus();

for (let input of inputs) {
    input.value = '';
}

inputs[1].addEventListener('input', capturarInputs);


function capturarInputs(event) {
    span.innerText = multiplicacioMedianteSumasSucesivas(parseFloat(inputs[0].value), parseFloat(inputs[1].value));
};
let input = document.querySelector('input');
let sectionResultados = document.querySelector('.resultados');
let botones = document.getElementsByTagName('button');
input.value = '';
input.focus();

let arrayUsuario = new Array();

botones[0].addEventListener('click', capturarAlmacenar);

function capturarAlmacenar() {
    if (input.value != '') {
        isNaN(input.value) ? arrayUsuario.push(input.value) : arrayUsuario.push(parseInt(input.value));
    };
    input.placeholder = 'Introduce otro elemento del array';
    input.value = '';
    input.focus();
    arrayUsuario = arrayUsuario;
    return arrayUsuario;
};


botones[1].addEventListener('click', capturarMostrarPalabras);

function capturarMostrarPalabras() {


    sectionResultados.innerHTML += '<h2>Éstas son las palabras de tu array ordenadas por tamaño(de myor a menor) y alfabéticamente:</h2><ul id="ul_01"></ul>';

    let ul_01 = document.querySelector('#ul_01');

    for (let i = 0; i < arrayUsuario.length; i++) {
        if (typeof (arrayStringsOrdenado(arrayUsuario)[i]) == 'string') {
            ul_01.innerHTML += `<li><div><h6>Palabra ${i + 1}, tiene ${arrayStringsOrdenado(arrayUsuario)[i].length} letras:</h6><p>${arrayStringsOrdenado(arrayUsuario)[i]}</p></div></li>`;
        };
    };
};



botones[2].addEventListener('click', capturarMostrarNumeros);

function capturarMostrarNumeros() {

    sectionResultados.innerHTML += '<h2>Éstas son las operaciones calculadas con los números de tu array:</h2><ul id="ul_02">';

    let ul_02 = document.querySelector('#ul_02')

    for (let i = 0; i < 5; i++) {
        ul_02.innerHTML += `<li>Operación ${calculateNumbers(arrayUsuario)[i + 5]}: ${calculateNumbers(arrayUsuario)[i].toFixed(2)}</li>`
    };

    sectionResultados.innerHTML += '</ul>';
};
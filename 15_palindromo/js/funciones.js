function esPalindromo(pString) {
    let arrayPartido = pString.toLowerCase().split(' ');
    let stringConcatenado = '';
    let esPalindromo = true;
    for (let i = 0; i < arrayPartido.length; i++) {
        stringConcatenado += arrayPartido[i];
    };
    let arrayFinal = stringConcatenado.split('');
    let arrayFinalReves = stringConcatenado.split('').reverse();
    for (let i = 0; i < arrayFinal.length; i++) {
        if (arrayFinal[i] == arrayFinalReves[i]) {
        } else {
            esPalindromo = false;
        };
    };
    return esPalindromo;
};

function pintarResultado(pTexto) {
    sectionResultados.innerHTML += `<div>Tu texto ${pTexto} es un palíndromo.</div>`;
};


function arrayStringsOrdenado(pArray) {
    const arrayStrings = new Array();
    for (let i = 0; i < pArray.length; i++) {
        //Elijo sólo los elementos que sean string del array original y los introduzco en el array (arrayStrings)
        let tipo = typeof (pArray[i]);
        if (tipo == 'string') {
            arrayStrings.push(pArray[i]);
        };
    };
    //Ordeno el nuevo array alfabéticamente por contenido de palabra
    arrayStrings.sort();
    //Ordeno el nuevo array por longitud de palabra
    arrayStrings.sort((a, b) => {
        if (b.length > a.length) {
            return 1;
        };
        if (b.length < a.length) {
            return -1;
        };
        return 0;
    });
    return arrayStrings;
};

function calculateNumbers(pArray) {
    const arrayNumbers = new Array();
    for (const iterator of pArray) {
        let type = typeof (iterator);
        if (type == 'number') {
            arrayNumbers.push(iterator);
        };
    };
    //La función calcular viene de 11_sumaRestaMultiplicacionDivisionDe10Numeros y devuelve un array de resultados
    return calcular(arrayNumbers);
};


let article = document.querySelector('article');

function pintarPalabras(pArray) {
    article.innerHTML = '';
    article.innerHTML = `<h2>Éstas son las palabras de tu array ordenadas por tamaño(de mayor a menor) y alfabéticamente:</h2>
    `;
    for (let i = 0; i < pArray.length; i++) {
        pintarPalabra(pArray[i], i + 1);
    };
};

function pintarPalabra(pPalabra, pPosicion) {
    article.innerHTML += `  <li>
                                <div>
                                    <h6>La palabra ${pPosicion} tiene ${pPalabra.length} letras y es : </h6>
                                    <p>${pPalabra}</p>
                                </div>
                            </li>`;
};

function pintarNumeros(pArray) {
    article.innerHTML = '';
    article.innerHTML = `<h2>Éstas son las operaciones calculadas con los números de tu array:</h2><ul>`;
    for (let i = 0; i < 5; i++) {
        pintarNumero(pArray[i], pArray[i + 5]);
    };
};

function pintarNumero(pResultado, pOperacion) {
    article.innerHTML += `<li>Operación ${pOperacion}: ${pResultado.toFixed(2)} </li>`
};


let p = document.querySelector('p');

function pintarArray(pArray) {
    p.innerText = 'Tu array es: [ ';
    pArray.forEach(element => pintarElementoArray(element));
    p.innerText += ' ]'
};

function pintarElementoArray(pElement) {
    p.innerHTML += pElement + ', ';
};

let arrayPrueba = ['Holo', 'Hola', 'Asturi', 2, 3, 'Sésamo', true, 'Candelabro'];
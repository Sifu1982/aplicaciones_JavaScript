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

let arrayPrueba = ['Holo', 'Hola', 'Asturi', 2, 3, 'Sésamo', true, 'Candelabro'];

// let copiaArrayPrueba = [...arrayPrueba];
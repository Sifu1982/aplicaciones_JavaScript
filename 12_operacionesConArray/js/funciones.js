function devuelveArrayStringsOrdenado(pArray) {
    const arrayObjetos = new Array();
    for (const elemento of pArray) {
        let tipo = typeof (elemento);
        //Creo cada objeto que compondrá el arrayObjetos
        const newObject = {
            palabra: elemento,
            longitud: elemento.length
        };
        //Elijo sólo los elementos string del array original y los introduzco en un nuevo array (arrayObjetos)
        if (tipo == 'string') {
            arrayObjetos.push(newObject);
        };
    };
    //Ordeno el nuevo array alfabéticamente por contenido de palabra
    arrayObjetos.sort((a, b) => {
        if (a.palabra > b.palabra) {
            return 1;
        };
        if (a.palabra < b.palabra) {
            return -1;
        };
        return 0;
    });
    //Ordeno el nuevo array por longitud de palabra
    arrayObjetos.sort((a, b) => {
        if (b.longitud > a.longitud) {
            return 1;
        };
        if (b.longitud < a.longitud) {
            return -1;
        };
        return 0;
    });
    return arrayObjetos;
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

// let arrayPrueba = ['Hola', 'Asturi', 2, 3, 'Sésamo', true, 'Candelabro'];

// let copiaArrayPrueba = [...arrayPrueba];
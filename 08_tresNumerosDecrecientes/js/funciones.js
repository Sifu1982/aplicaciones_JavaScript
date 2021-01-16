//sort() ordena mejor cuando le añadimos una función de comparación. Si le añadimos (a, b) => a - b ordenará en orden creciente  y si le añadimos (a, b) => b - a ordenará en orden decreciente.
function ordenarNumeros(pNum1, pNum2, pNum3) {
    let arrayNumeros = new Array(pNum1, pNum2, pNum3);
    arrayNumeros.sort((a, b) => b - a);
    return arrayNumeros
};

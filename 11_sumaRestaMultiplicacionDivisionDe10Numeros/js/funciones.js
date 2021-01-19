function calcular(pArray) {
    let arrayResultados = [];
    let suma = pArray[0];
    let producto = pArray[0];
    let resta = pArray[0];
    let division = pArray[0];
    let potencia = pArray[0];

    for (let i = 0; i < pArray.length - 1; i++) {
        suma += pArray[i + 1];
        producto = producto * pArray[i + 1];
        resta = resta - pArray[i + 1];
        division = division / pArray[i + 1];
        potencia = potencia ** pArray[i + 1];
    };
    arrayResultados.push(suma);
    arrayResultados.push(resta);
    arrayResultados.push(producto);
    arrayResultados.push(division);
    arrayResultados.push(potencia);
    arrayResultados.push('suma');
    arrayResultados.push('resta');
    arrayResultados.push('producto');
    arrayResultados.push('división');
    arrayResultados.push('potencia');

    return arrayResultados;
};
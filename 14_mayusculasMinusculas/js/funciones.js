function mayusculasMinusculas(pString) {
    let arrayMinusculas = [];
    let arrayMayusculas = [];
    let tipo = '';
    for (let i = 0; i < pString.length; i++) {
        if (pString[i] == pString[i].toLowerCase()) {
            arrayMinusculas.push(pString[i]);
        } else {
            arrayMayusculas.push(pString[i]);
        };
    };
    if (arrayMinusculas.length == pString.length) {
        tipo = 'todas minúsculas';
    } else if (arrayMayusculas.length == pString.length) {
        tipo = 'todas mayúsculas';
    } else {
        tipo = 'una mezcla de mayúsculas y minúsculas';
    };
    return tipo;
};
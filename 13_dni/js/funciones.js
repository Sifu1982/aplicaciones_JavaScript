function calcularLetraDNI(pNumero) {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
        'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let posicion = pNumero % 23;
    let letraDNI = letras[posicion];
    return letraDNI;
};
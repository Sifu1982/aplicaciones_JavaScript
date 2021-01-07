function calcularNPrimerosMultpiplos(pNumero, pNumeroDemultiplos) {
    let arrayNum = new Array();
    for (let i = 1; i <= pNumeroDemultiplos; i++) {
        let num = i * pNumero;
        arrayNum.push(num);
    };
    return arrayNum;
};



function sumarPosicionesArray(pArrayNum) {
    let suma = 0;
    for (let i = 0; i < pArrayNum.length; i++) {
        suma += pArrayNum[i];
    };
    return suma;
};



let divMultiplo = document.getElementById('multiplo');
function pintarMultiplos(pArrayMultiplos) {
    divMultiplo.innerHTML = ''
    for (let i = 0; i < pArrayMultiplos.length; i++) {
        divMultiplo.innerHTML += `<p><strong>${i + 1}º múltiplo = ${pArrayMultiplos[i]}</strong></p>`
    }
};


let divSumatorio = document.getElementById('sumatorio');
function pintarSumaMultipos(pSumaArray) {
    divSumatorio.innerHTML = '';
    divSumatorio.innerHTML += `<p><strong>Suma de todos los múltiplos = ${pSumaArray}</strong></p>`
};







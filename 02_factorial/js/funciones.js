function factorial(pNum) {
    let array = new Array();
    let producto = 1;
    for (let i = 0; i < pNum; i++) {
        let numerosDecrecientes = pNum - i
        array.push(numerosDecrecientes);
        producto = producto * array[i];
    };
    return producto;
}

let divResultado = document.querySelector('.resultado');
function pintarResultado(pNum) {
    divResultado.innerHTML = '';
    divResultado.innerHTML += `<strong>${pNum}!</strong>&nbsp; es &nbsp;<strong>${factorial(pNum)}</strong>`;
}

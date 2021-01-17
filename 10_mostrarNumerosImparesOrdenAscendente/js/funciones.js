function array100PrimerosImpares() {
    let arrayImpares = new Array();
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            arrayImpares.push(i);
        };
    };
    return arrayImpares;
};


let ul = document.querySelector('ul');
function pintarArray(pArray) {
    for (let i = 0; i < pArray.length; i++) {
        ul.innerHTML += `<li>${pArray[i]}</li>`;
    };
};

pintarArray(array100PrimerosImpares());
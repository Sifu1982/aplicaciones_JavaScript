let arrayNumeros = new Array();

let divNumeros = document.querySelector('.resultado div:last-child');
let numeros = document.querySelector('#numero');
let mensaje = document.querySelector('#input p');

numeros.value = '';

let contador = 1;
function pintarUnNumero(pNum) {
    if (pNum != 0) {
        arrayNumeros.push(pNum);
        divNumeros.innerHTML += `<p>Número ${contador}: ${pNum}</p>`
        contador++;
        numeros.placeholder = 'Introduce otro número';
    } else {
        pintarCuentaNumeros();
        mensaje.innerText = 'Has pulsado 0, así que te muestro tu resultado';
    }
    return arrayNumeros;
};

let divCuentaNumeros = document.querySelector('.resultado div:first-child');
divCuentaNumeros.innerHTML = '';
function pintarCuentaNumeros() {
    if (arrayNumeros.length == 1) {
        divCuentaNumeros.innerHTML += `<p>Has introducido sólo 1 número</p>`;
    } else {
        divCuentaNumeros.innerHTML += `<p>Has introducido ${arrayNumeros.length} números</p>`;
    }
    boton.parentElement.removeChild(boton);
    numeros.parentElement.removeChild(numeros);
};
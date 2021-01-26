let titulo = document.querySelector('h1');

let buttonCarne = document.querySelector('.platos figure:nth-child(1) button');
let resultadoCarne = document.querySelector('.cuenta table tr:nth-child(2) td:nth-child(1)');


let buttonPescado = document.querySelector('.platos figure:nth-child(2) button');
let resultadoPescado = document.querySelector('.cuenta table tr:nth-child(2) td:nth-child(2)');


let resultadoPostre = document.querySelector('.cuenta table tr:nth-child(2) td:nth-child(3)');

let resultadoPropina = document.querySelector('.cuenta table tr:nth-child(2) td:nth-child(4)');

let resultadoTotal = document.querySelector('.cuenta table tr:nth-child(2) td:nth-child(5)');


buttonCarne.addEventListener('click', capturarBotonCarne);
function capturarBotonCarne(event) {
    carnePescado(event.target.alt);
    resultadoCarne.innerText = total + ' euros';
    DontRepeatYourself();
};

buttonPescado.addEventListener('click', capturarBotonPescado);
function capturarBotonPescado(event) {
    carnePescado(event.target.alt);
    resultadoPescado.innerText = total + ' euros';
    DontRepeatYourself();
};

function DontRepeatYourself() {
    resultadoTotal.innerText = total + ' euros';
    titulo.innerText = '¿Desea postre?';
    pintarPostre();

    let botonSi = document.getElementById('si');
    botonSi.addEventListener('click', capturarBotonSi);

    let botonNo = document.getElementById('no');
    botonNo.addEventListener('click', capturarBotonNo);
};

function capturarBotonNo() {
    resultadoPropina.innerText = propina().toFixed(2) + ' euros';
    resultadoTotal.innerText = totalizar().toFixed(2) + ' euros';
    divPostre.innerHTML = '';
    titulo.innerHTML = '¡¡MUCHAS GRACIAS POR SU VISITA!!' + '<p>VUELVA PRONTO</p>';
    titulo.setAttribute('style', 'border-radius: 50%; transition: 5s; background-color: green; color: yellow; rotate: 345deg; position: relative; top: 50vh;');
    document.body.setAttribute('style', 'background-color: lightblue; transition: 8s;')
};

function capturarBotonSi() {
    resultadoPostre.innerText = precioPostre + ' euros';
    total += precioPostre;
    capturarBotonNo();
};
let total = 0;
const precioCarne = 23;
const precioPostre = 3;
const porcentajePropina = 0.06;

function carnePescado(pComida) {
    if (pComida == 'carne') {
        total += precioCarne;
    } else if (pComida == 'pescado') {
        const precioPescado = 15;
        total += precioPescado;
    }
    return total;
}


function propina() {
    let propina = total * porcentajePropina;
    return propina;
}

function totalizar() {
    total += propina()
    return total;
}

let divPostre = document.querySelector('.platos');
function pintarPostre() {
    divPostre.innerHTML = `<figure>
    <img src="img/postre.jpg" alt="postre">
    <figcaption>Postre: 3 euros</figcaption>
    <div class="buttons">
        <button id="si" class="button">Sí</button>
        <button id="no" class="button">No</button>
    </div>
</figure>`;
}
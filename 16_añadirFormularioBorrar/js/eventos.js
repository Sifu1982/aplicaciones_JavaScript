let inputNombre = document.getElementById('nombre');
let inputFoto = document.getElementById('foto');
let inputPrecio = document.getElementById('precio');

let addButton = document.getElementById('addbutton');
let deleteButton = document.getElementById('deletebutton');

/**
  * 
  * Vaciar formulario
  * 
  */

inputNombre.value = '';
inputFoto.value = '';
inputPrecio.value = '';

/**
 * 
 * EVENTOS
 * 
 */

addButton.addEventListener('click', capturarAñadir);

function capturarAñadir(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let foto = inputFoto.value;
    let precio = inputPrecio.value;
    if (nombre == '' || foto == '' || precio == '') {
        if (isNaN(parseFloat(precio)) && precio != '') {
            inputPrecio.value = '';
            inputPrecio.placeholder = 'Tienes que insertar un número';
        };
    } else if (!isNaN(parseFloat(precio))) {
        add(arrayProductos, nombre, foto, precio);
        pintarProductos(arrayProductos);
    };
};


deleteButton.addEventListener('click', capturarEliminar);

function capturarEliminar(event) {
    event.preventDefault();
    borrarProducto(arrayProductos);
    pintarProductos(arrayProductos);
};
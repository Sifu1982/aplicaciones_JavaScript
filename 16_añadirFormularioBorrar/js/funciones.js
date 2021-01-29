function add(pListaProductos, pNombre, pURL, pPrecio) {
    let producto = {
        nombre: pNombre,
        fotoURL: pURL,
        precio: pPrecio
    };
    pListaProductos.push(producto);
    return pListaProductos;
};

let sectionProductos = document.querySelector('.productos');
let numeroArticulos = document.querySelector('span');

function pintarProductos(pListaProductos) {
    sectionProductos.innerHTML = '';
    numeroArticulos.innerText = ' ' + arrayProductos.length;
    pListaProductos.forEach(pProducto => pintarProducto(pProducto));
};


/**
 * 
 * OPCIÓN 1
 * 
 */

// function pintarProducto(pProducto) {
//     sectionProductos.innerHTML += `<article>
//                                         <figure>
//                                             <img src="${pProducto.fotoURL}"
//                                                 alt="${pProducto.nombre}">
//                                             <figcaption>
//                                                 <p>${pProducto.nombre}</p>
//                                                 <p>${pProducto.precio} euros</p>
//                                             </figcaption>
//                                         </figure>
//                                     </article>`
// };


/**
 * 
 * OPCIÓN 2
 * 
 */

function pintarProducto(pProducto) {
    //Crear los elementos
    let article = document.createElement('article');
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    let pNombre = document.createElement('p');
    let pPrecio = document.createElement('p');
    img.src = pProducto.fotoURL;

    //Crear los contenidos
    let contenPnombre = document.createTextNode(pProducto.nombre);
    let contenPprecio = document.createTextNode(pProducto.precio + ' euros');

    //Tirar los contenidos dentro de los elementos
    pNombre.appendChild(contenPnombre);
    pPrecio.appendChild(contenPprecio);

    //Tirar cada etiqueta dentro de la que le corresponda, en su orden correspondiente:
    figcaption.appendChild(pNombre);
    figcaption.appendChild(pPrecio);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    article.appendChild(figure);

    sectionProductos.appendChild(article);
};


function borrarProducto(pListaProductos) {
    pListaProductos.shift();
    return pListaProductos;
};

pintarProductos(arrayProductos);
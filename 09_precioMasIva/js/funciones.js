function precioMasIva(pPrecio, pIva) {
    let resultado = parseFloat(pPrecio) + parseFloat(pPrecio) * parseFloat(pIva) / 100;
    return resultado;
};


//Capturar elementos del DOM
let v1 = document.getElementById('input_1');
let v2 = document.getElementById('input_2');
let v3 = document.getElementById('input_3');
let a = document.querySelector('a');
let lis = document.getElementsByTagName('li');

//Vaciar inputs
v1.value = '';
v2.value = '';
v3.value = '';

//Empezar con el cursor en el input_1
v1.focus();

//Crear evento
a.addEventListener('click', capturarInputs);

//Crear función del evento
function capturarInputs(event) {
    //Prevenir la acción por defecto(para los <a></a> y los <input type="submit"> de los formularios)
    event.preventDefault();
    //Texto del primer li
    let texto1 = ' las variables son cero';
    if (cero(v1.value, v2.value, v3.value)) {
        lis[0].innerText = 'Todas' + texto1;
    } else {
        lis[0].innerText = 'NO todas' + texto1;
    };
    //Texto del segundo li
    let texto2 = ' las variables son positivas';
    if (positivas(v1.value, v2.value, v3.value)) {
        lis[1].innerText = 'Todas' + texto2;
    } else {
        lis[1].innerText = 'NO todas' + texto2;
    };
    //Texto del tercer li
    let texto3 = ' las variables tienen el mismo signo';
    if (mismoSigno(v1.value, v2.value, v3.value)) {
        lis[2].innerText = 'Todas' + texto3;
    } else {
        lis[2].innerText = 'NO todas' + texto3;
    };
    //Texto del cuarto li
    let texto4 = ' sus valores son distintos';
    if (todosSusValoresDistintos(v1.value, v2.value, v3.value)) {
        lis[3].innerText = 'Todos' + texto4;
    } else {
        lis[3].innerText = 'NO todos' + texto4;
    };
    //Texto del quinto li
    let texto5 = 'Dos de sus valores ';
    if (dosValoresCoinciden(v1.value, v2.value, v3.value)) {
        lis[4].innerText = texto5 + 'coinciden';
    } else {
        lis[4].innerText = texto5 + 'NO coinciden';
    };
    //Texto del sexto li
    let texto6 = 'Como máximo dos de sus valores ';
    if (maximoDosValoresCoinciden(v1.value, v2.value, v3.value)) {
        lis[5].innerText = texto6 + 'coinciden';
    } else {
        lis[5].innerText = texto6 + 'NO coinciden';
    };
    //Texto del septimo li
    let texto7 = 'El valor de la variable ';
    let texto8 = 'está comprendido entre los valores de las variables 1 y 3';
    if (v2ComprendidoEntrev1Yv3(v1.value, v2.value, v3.value)) {
        lis[6].innerText = texto7 + texto8;
    } else {
        lis[6].innerText = texto7 + 'NO ' + texto8;
    };
    //Mostrar los estilos de los lis
    for (let li of lis) {
        li.style.listStyleType = 'lower-latin';
    };
};
import brutaCorte from "./bruta";
import crearAnimacion from "./cytos";
import crearFraja from "./Franja";

function Sim(contenedor, changeToHome) {
    /*Declaracion de elementos */
    const botonHome = document.createElement('button');
    const botonStart = document.createElement('button');
    const fila1 = document.createElement('div');
    const col11 = document.createElement('div');
    const col12 = document.createElement('div');
    const col13 = document.createElement('div');
    const fila2 = document.createElement('div');
    const col21 = document.createElement('div');
    const col22 = document.createElement('div');
    const fila3 = document.createElement('div');
    const selector = document.createElement('select');
    const bruta = document.createElement('div');
    const optima = document.createElement('div');
    const comparacion = document.createElement('div');
    /*Clases de bootstrap */
    selector.classList.add("form-select", "form-select-lg", "my-2");
    botonHome.classList.add("btn", "btn-bondi");
    botonStart.classList.add("btn", "btn-outline-bondi");
    fila1.classList.add("row", "align-items-center");
    col11.classList.add("col-auto");
    col12.classList.add("col-auto");
    col13.classList.add("col-3", "d-flex", "justify-content-end");
    fila2.classList.add("row", "align-items-center", "py-3");
    col21.classList.add("col", "py-2");
    col22.classList.add("col", "py-2");
    /*Extras*/
    brutaCorte(bruta);
    const handlerStartAnim = () => {
        crearAnimacion(2,5);
    }
    selector.id = "sizeOfRod";
    botonStart.textContent = "Iniciar Animación";
    botonStart.disabled = true;
    botonStart.onclick = handlerStartAnim;
    bruta.id = "bruta";
    optima.id = "optima";
    comparacion.id = "comparacion";
    botonHome.textContent = "Regresar";
    botonHome.onclick = changeToHome;
    mountRow2(fila2, col21, col22, botonStart);
    optionsMount(selector);
    const handlerChangeSelector = (event) => {
        if (event.target.value === "bruta") {
            fila3.replaceChildren(bruta);
        } else if (event.target.value === "vs") {
            fila3.replaceChildren(comparacion);
        } else if (event.target.value === "optima") {
            fila3.replaceChildren(optima);
        }
    }
    selector.onchange = handlerChangeSelector;
    franjaItems(fila1, col11, col12, col13, botonHome, selector);
    fila3.appendChild(bruta);
    contenedor.appendChild(fila1);
    contenedor.appendChild(fila2);
    contenedor.appendChild(fila3);
    return contenedor;
}

function mountSelectSizes(selector) {
    const op1 = document.createElement('option');
    const op2 = document.createElement('option');
    const op3 = document.createElement('option');
    const defaultOP = document.createElement('option');
    defaultOP.selected = true;
    defaultOP.text = "Tamños Disponibles";
    defaultOP.value = 0;
    op1.value = 4;
    op2.value = 5;
    op3.value = 6;
    op1.text = "4";
    op2.text = "5";
    op3.text = "6";
    selector.appendChild(defaultOP);
    selector.appendChild(op1);
    selector.appendChild(op2);
    selector.appendChild(op3);
}

function crearFilaTamaños(size) {
    const filaTamaños = [];
    const thTamaño = document.createElement('th');
    thTamaño.textContent = "Tamaño";
    filaTamaños.push(thTamaño);
    for(let i = 1; i<=size; i++){
        var tdTamaño = document.createElement('td');
        tdTamaño.textContent = i;
        filaTamaños.push(tdTamaño);
    }
    return filaTamaños;
}
function crearFilaPrecios(size) {
    const filaPrecios = [];
    const thPrecio = document.createElement('th');
    thPrecio.textContent = "Precio";
    filaPrecios.push(thPrecio);
    for(let i = 1; i<=size; i++){
        var tdPrecio = document.createElement('td');
        var entrada = document.createElement('input');
        entrada.id = "price-"+i;
        entrada.type = "number";
        entrada.max = 50;
        entrada.min = 1;
        tdPrecio.appendChild(entrada);
        filaPrecios.push(tdPrecio);
    }
    return filaPrecios;
}

function mountRow2(fila2, col1, col2, botonStart) {
    const filaAux = document.createElement('div');
    const col1Aux = document.createElement('div');
    const col2Aux = document.createElement('div');
    const selectorLabel = document.createElement('h5');
    const selector = document.createElement('select');
    const tablaPrecios = document.createElement('table');
    const resposiveTable = document.createElement('div');
    const theadPrecios = document.createElement('thead');
    const tbodyPrecios = document.createElement('tbody');
    const trTamaño = document.createElement('tr');
    const trPrecio = document.createElement('tr');
    const thPrecio = document.createElement('th');
    const thTamaño = document.createElement('th');
    const handlerChangeSize = (event) => {
        if (event.target.value > 0) {
            console.log(event.target.value);
            trTamaño.replaceChildren(...crearFilaTamaños(event.target.value));
            trPrecio.replaceChildren(...crearFilaPrecios(event.target.value));
            botonStart.disabled = false;
        }
    }
    tablaPrecios.classList.add("table");
    trTamaño.classList.add("table-morning-glory");
    selector.classList.add('form-select');
    col1Aux.classList.add('col');
    col2Aux.classList.add('col');
    filaAux.classList.add("row");
    resposiveTable.classList.add('table-responsive');
    selector.onchange = handlerChangeSize;
    selectorLabel.textContent = "Elige el Tamaño de Varilla:";
    selector.id = "tamñoElegido";
    thPrecio.textContent = "Precio";
    thTamaño.textContent = "Tamaño";
    col1Aux.appendChild(selectorLabel);
    col1Aux.appendChild(selector);
    col2Aux.appendChild(botonStart);
    filaAux.appendChild(col1Aux);
    filaAux.appendChild(col2Aux);
    trPrecio.appendChild(thPrecio);
    trTamaño.appendChild(thTamaño);
    theadPrecios.appendChild(trTamaño);
    tbodyPrecios.appendChild(trPrecio);
    tablaPrecios.appendChild(theadPrecios);
    tablaPrecios.appendChild(tbodyPrecios);
    resposiveTable.appendChild(tablaPrecios);
    col1.appendChild(filaAux);
    col2.appendChild(resposiveTable);
    fila2.appendChild(col1);
    fila2.appendChild(col2);
    mountSelectSizes(selector);
}


function optionsMount(selector) {
    const defaultOP = document.createElement('option');
    const op1 = document.createElement('option');
    const op2 = document.createElement('option');
    const op3 = document.createElement('option');
    defaultOP.selected = true;
    defaultOP.text = "Elige el modo de simulación";
    op1.value = "bruta";
    op1.text = "Solo Fuerza Bruta";
    op2.value = "optima";
    op2.text = "Solo Opcion Optmia";
    op3.value = "vs";
    op3.text = "Comparación Bruta vs Optima";
    selector.appendChild(defaultOP);
    selector.appendChild(op1);
    selector.appendChild(op2);
    selector.appendChild(op3);
}

function franjaItems(fila1, col11, col12, col13, buttonBack, selector) {
    fila1.classList.add("franja");
    col12.appendChild(selector);
    col11.appendChild(crearFraja("BIENVENIDO AL SIMULADOR: "));
    col13.appendChild(buttonBack);
    fila1.appendChild(col11);
    fila1.appendChild(col12);
    fila1.appendChild(col13);
}
export default Sim;
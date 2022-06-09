import brutaModule from "./bruta";
import crearAnimacion from "./cytos";
import crearFraja from "./Franja";
import optimaModule from "./optima";
import main from "./cutRodDP";
import comparacionSoluciones from "./vs";
import brutavsdp from "./brutavsDP";

function Sim(contenedor, changeToHome) {
    /*Declaracion de elementos */
    const botonHome = document.createElement('button');
    const botonReset = document.createElement('button');
    const botonStart = document.createElement('button');
    const botonPlay = document.createElement('button');
    const botonPause = document.createElement('button');
    const botonRestart = document.createElement('button');
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
    botonReset.classList.add("btn", "btn-bondi");
    botonStart.classList.add("btn", "btn-outline-bondi");
    botonPlay.classList.add("btn", "btn-outline-bondi");
    botonPause.classList.add("btn", "btn-outline-bondi");
    botonRestart.classList.add("btn", "btn-outline-bondi");
    fila1.classList.add("row", "align-items-center");
    col11.classList.add("col-auto");
    col12.classList.add("col-auto");
    col13.classList.add("col-3", "d-flex", "justify-content-end");
    fila2.classList.add("row", "align-items-center", "py-3");
    col21.classList.add("col", "py-2");
    col22.classList.add("col", "py-2");
    /*Extras*/
    selector.id = "sizeOfRod";
    botonPlay.id = "play";
    botonPause.id = "pause";
    botonRestart.id = "restart";
    botonStart.textContent = "Iniciar animación";
    botonStart.disabled = true;
    botonPlay.textContent = "Reanudar animación";
    botonPlay.disabled = true;
    botonPause.textContent = "Pausar animación";
    botonPause.disabled = true;
    botonRestart.textContent = "Reiniciar animación";
    botonRestart.disabled = true;
    botonReset.disabled = true;
    bruta.id = "bruta";
    optima.id = "optima";
    comparacion.id = "comparacion";
    botonHome.textContent = "Regresar";
    botonReset.textContent = "Limpiar animación"
    botonHome.onclick = changeToHome;
    mountRow2(fila2, col21, col22, botonStart, botonPlay, botonPause, botonRestart);
    optionsMount(selector);
    brutaModule.brutaCorte(bruta);
    comparacionSoluciones(comparacion);
    optimaModule.optimaCanvas(optima);
    const handlerChangeSelector = (event) => {
        if (event.target.value === "bruta") {
            fila3.replaceChildren(bruta);
            const handlerStartAnim = () => {
                botonPlay.disabled = false;
                botonPause.disabled = false;
                botonRestart.disabled = false;
                botonReset.disabled = false;
                botonStart.disabled = true;
                let precios = getValues();
                crearAnimacion(precios, precios.length);
            }

            const handlerResetAnim = () => {
                let newBruta = document.createElement('div');
                newBruta.id = 'bruta';
                brutaModule.brutaCorte(newBruta);
                fila3.replaceChildren(newBruta);
                botonStart.onclick = handlerStartAnim;
                botonReset.disabled = true;
                botonPlay.disabled = true;
                botonPause.disabled = true;
                botonRestart.disabled = true;
                botonStart.disabled = false;
                clearValues();
            }
            botonStart.onclick = handlerStartAnim;
            botonReset.disabled = true;
            botonPlay.disabled = true;
            botonPause.disabled = true;
            botonRestart.disabled = true;
            botonReset.onclick = handlerResetAnim;
        } else if (event.target.value === "vs") {
            fila3.replaceChildren(comparacion);
            const handlerStartAnim = () => {
                botonPlay.disabled = false;
                botonPause.disabled = false;
                botonRestart.disabled = false;
                let precios = getValues();
                brutavsdp(precios.length, precios);
            }
            botonStart.onclick = handlerStartAnim;
            botonPlay.disabled = true;
            botonPause.disabled = true;
            botonRestart.disabled = true;
        } else if (event.target.value === "optima") {
            fila3.replaceChildren(optima);
            const handlerStartAnim = () => {
                botonPlay.disabled = false;
                botonPause.disabled = false;
                botonRestart.disabled = false;
                let precios = getValues();
                main(precios.length, precios);
            };

            const handlerResetAnim = () => {
                location.reload();
            };

            botonReset.disabled = false;
            botonReset.onclick = handlerResetAnim;
            botonStart.onclick = handlerStartAnim;
            botonPlay.disabled = true;
            botonPause.disabled = true;
            botonRestart.disabled = true;
        }
    }
    selector.onchange = handlerChangeSelector;
    franjaItems(fila1, col11, col12, col13, botonHome, botonReset, selector);
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
    defaultOP.text = "Tamaños disponibles";
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
    for (let i = 1; i <= size; i++) {
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
    for (let i = 1; i <= size; i++) {
        var tdPrecio = document.createElement('td');
        var entrada = document.createElement('input');
        entrada.id = "price-" + i;
        entrada.type = "number";
        entrada.max = 50;
        entrada.min = 1;
        tdPrecio.appendChild(entrada);
        filaPrecios.push(tdPrecio);
    }
    return filaPrecios;
}

function mountRow2(fila2, col1, col2, botonStart, botonPlay, botonPause, botonRestart) {
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
    const fila1Aux = document.createElement('div');
    const fila2Aux = document.createElement('div');
    const col11 = document.createElement('div');
    const col12 = document.createElement('div');
    const col21 = document.createElement('div');
    const col22 = document.createElement('div');
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
    fila1Aux.classList.add("row", "py-2");
    fila2Aux.classList.add("row", "py-2");
    col11.classList.add("col");
    col12.classList.add("col");
    col21.classList.add("col");
    col22.classList.add("col");
    resposiveTable.classList.add('table-responsive');
    selector.onchange = handlerChangeSize;
    selectorLabel.textContent = "Elige el tamaño de varilla:";
    selector.id = "tamñoElegido";
    thPrecio.textContent = "Precio";
    thTamaño.textContent = "Tamaño";
    col11.appendChild(botonStart);
    col12.appendChild(botonPause);
    col21.appendChild(botonPlay);
    col22.appendChild(botonRestart);
    col1Aux.appendChild(selectorLabel);
    col1Aux.appendChild(selector);
    col2Aux.appendChild(fila1Aux);
    col2Aux.appendChild(fila2Aux);
    fila1Aux.appendChild(col11);
    fila1Aux.appendChild(col12);
    fila2Aux.appendChild(col21);
    fila2Aux.appendChild(col22);
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
    op2.text = "Solo Opcion Optima";
    op3.value = "vs";
    op3.text = "Comparación Bruta vs Optima";
    selector.appendChild(defaultOP);
    selector.appendChild(op1);
    selector.appendChild(op2);
    selector.appendChild(op3);
}

function franjaItems(fila1, col11, col12, col13, buttonBack, botonReset, selector) {
    fila1.classList.add("franja");
    col12.appendChild(selector);
    col11.appendChild(crearFraja("BIENVENIDO AL SIMULADOR: "));
    var col131 = document.createElement('div');
    var col132 = document.createElement('div');
    col131.classList.add("col", "centerDiv");
    col132.classList.add("col", "centerDiv");
    col13.appendChild(col131);
    col13.appendChild(col132);
    col131.appendChild(buttonBack);
    col132.appendChild(botonReset);
    fila1.appendChild(col11);
    fila1.appendChild(col12);
    fila1.appendChild(col13);
}

function clearValues(){
    let len = document.getElementById('tamñoElegido').value;
    let precios = [];

    let idSinNum = 'price-';

    for (let i = 0; i < len; i++) {
        let id = idSinNum + (i + 1);
        //console.log(id);
        let price = document.getElementById(id);
        price.value = '';
    }
}

function getValues() {
    let len = document.getElementById('tamñoElegido').value;
    let precios = [];

    let idSinNum = 'price-';

    for (let i = 0; i < len; i++) {
        let id = idSinNum + (i + 1);
        //console.log(id);
        let price = document.getElementById(id);
        if (price.value !== '') {
            precios.push(parseInt(price.value, 10));
        } else {
            price.value = Math.floor(Math.random() * (21 - 1) + 1);
            precios.push(price.value);
        }
    }
    return precios;
}
export default Sim;
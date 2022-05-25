import 'bootstrap';
import crearFraja from './Franja';
import p5 from 'p5';
import Tree from './Tree/Tree';

new p5();

let precios = [3, 5, 7, 9];
let longitud = 4;
var arbol;

function setup(nodo) {
    const fila = document.createElement('div');
    fila.classList.add("row");
    const col1 = document.createElement('div');
    col1.classList.add("col");
    const col2 = document.createElement('div');
    col2.classList.add("col");
    fila.appendChild(col1);
    fila.appendChild(col2);
    //nodo.appendChild(fila);
    col1.appendChild(crearFraja("Solución por Fuerza Bruta"));
    createCanvas(700, 1500);
    background(51);
    arbol = new Tree();
    corteR(precios, longitud);

    console.log(arbol);
    arbol.traverse();
}

function corteR(precios, longitud) {
    var valmax = 0;
    var valor = 0;
    if (longitud <= 0) {
        return 0;
    }

    for (let i = 0; i < longitud; i++) {
        valor = precios[i] + corteR(precios, longitud - i - 1);
        arbol.addValue(valor);

        if (valor > valmax) {
            valmax = valor;
        }
    }

    return valmax;
}

/*
function brutaCorte(nodo) {
    const fila = document.createElement('div');
    fila.classList.add("row");
    const col1 = document.createElement('div');
    col1.classList.add("col");
    const col2 = document.createElement('div');
    col2.classList.add("col");
    fila.appendChild(col1);
    fila.appendChild(col2);
    nodo.appendChild(fila);
    const canvas = document.createElement('div');
    col1.appendChild(crearFraja("Solución por Fuerza Bruta"));
    //canvas.id = "canvas";
    //col1.appendChild(canvas);
}*/


export default setup;
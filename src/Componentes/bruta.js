import 'bootstrap';
import crearFraja from './Franja';
import p5 from 'p5';
import Tree from './Tree/Tree';

new p5();

let precios = [];
let longitud;
var arbol;

function setup(nodo, costs, len) {
    createCanvas(975, 15000);
    background(255);
    arbol = new Tree();
    for (let i = 0; i < len; i++){
        precios.push(parseInt(costs[i], 10));
    }
    longitud = len;

    let padre = null;
    corteR(precios, longitud, padre);

    console.log(arbol);
    arbol.traverse();
}

function corteR(precios, longitud, padre) {
    padre = arbol.addValue(longitud, padre);
    var valmax = Number.MIN_VALUE;
    var valor = 0;
    if (longitud <= 0) {
        return 0;
    }

    for (let i = 0; i < longitud; i++) {
        valor = precios[i] + corteR(precios, longitud - i - 1, padre);
        //console.log(valor);
        if (valor > valmax) {
            valmax = valor;
        }

    }

    return valmax;
}


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
}

const bruta = {
    setup,
    brutaCorte
}
export default bruta;
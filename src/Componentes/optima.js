import 'bootstrap';
import crearFraja from './Franja';

function setup() {
    createCanvas(975, 15000);
    background(0);
}

function optimaCanvas(nodo) {
    const fila = document.createElement('div');
    fila.classList.add("row");
    const col1 = document.createElement('div');
    col1.classList.add("col");
    const col2 = document.createElement('div');
    col2.classList.add("col");
    fila.appendChild(col1);
    fila.appendChild(col2);
    nodo.appendChild(fila);
    const canvasDiv = document.createElement('div');
    col1.appendChild(crearFraja("Solución por DP (Dynammic Programing)"));
    canvasDiv.id = "canvasID";
    col1.appendChild(canvasDiv);
    const canvas = document.createElement('canvas');
    canvas.width = 948;
    canvas.height = 500;
    canvas.id = "canvas"
    canvasDiv.appendChild(canvas);
}

const optima = {
    setup,
    optimaCanvas
}
export default optima;
import 'bootstrap';
import crearFraja from './Franja';

function setup( costs, len) {
    createCanvas(975, 15000);
    background(255);
}

function brutaCorte(nodo) {
    const fila = document.createElement('div');
    fila.classList.add("row");
    const col1 = document.createElement('div');
    col1.classList.add("col");
    const col2 = document.createElement('div');
    col2.classList.add("col");
    fila.appendChild(col1);
    //fila.appendChild(col2);
    nodo.appendChild(fila);
    const canvas = document.createElement('div');
    col1.appendChild(crearFraja("Solución por Fuerza Bruta"));
    canvas.id = "canvas";
    col1.appendChild(canvas);
}

const bruta = {
    setup,
    brutaCorte
}
export default bruta;
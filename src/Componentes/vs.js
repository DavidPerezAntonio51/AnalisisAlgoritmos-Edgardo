import 'bootstrap';
import crearFraja from './Franja';

function comparacionSoluciones(nodo) {
    const fila = document.createElement('div');
    fila.classList.add("row");
    const col1 = document.createElement('div');
    col1.classList.add("col");
    const col2 = document.createElement('div');
    col2.classList.add("col");
    fila.appendChild(col1);
    fila.appendChild(col2);
    nodo.appendChild(fila);
    const canvasb = document.createElement('div');
    const canvaso = document.createElement('div');
    col1.appendChild(crearFraja("Solución por Fuerza Bruta"));
    col2.appendChild(crearFraja("Solución por DP"));
    canvasb.id = "canvasBruta";
    canvaso.id = "canvasOptima";
    col1.appendChild(canvasb);
    col2.appendChild(canvaso);
}

export default comparacionSoluciones;
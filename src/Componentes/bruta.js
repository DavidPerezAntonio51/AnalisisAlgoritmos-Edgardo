import 'bootstrap';
import cytoscape from 'cytoscape';
import crearFraja from './Franja';
class brutaCorte {
    constructor(nodo) {
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
        col1.appendChild(crearFraja("Solucion por fuerza bruta"));
        canvas.id = "canvas";
        col1.appendChild(canvas);
    }
    crearAnimacion(tamaño, precios) {
        var cy = cytoscape({
            container: document.getElementById("canvas"),
            elements: {
                nodes: [
                    {
                        data: { id: 'a' }
                    },

                    {
                        data: { id: 'b' }
                    }
                ],
                edges: [
                    {
                        data: { id: 'ab', source: 'a', target: 'b' }
                    }
                ]
            },

            layout: {
                name: 'grid',
                rows: 1
            },

            // so we can see the ids
            style: [
                {
                    selector: 'node',
                    style: {
                        'label': 'data(id)'
                    }
                }
            ],
            headless: true,
        });
    }
}

export default brutaCorte;
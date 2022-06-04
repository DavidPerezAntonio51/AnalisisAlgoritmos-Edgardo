import Sim from './sim';
import cytoscape from 'cytoscape';
import * as p5 from 'p5';
import Tree from './Tree/Tree';
import dagre from 'cytoscape-dagre';

var arbol;
var pila = [];

function crearAnimacion(tprecios, longitud) {
    var selector = document.getElementById('tamñoElegido').value;
    //var valor = selector.getAttributeNode();
    console.log(selector);
    arbol = new Tree();
    /*
    const canvas = (sk) => {
        container: document.getElementById("canvas")
        sk.setup = () => {
            //container: document.getElementById("canvas");
          sk.createCanvas(700,400 , sk.WEBGL);
        }
        sk.draw = () => {
          sk.background(1000);
          sk.translate(0, -150, 0);

          sk.push();
          sk.rotateZ(1.57);
          sk.rotateX(0);
          sk.rotateY(0);
          sk.ambientMaterial(0);
          sk.cylinder(10, 100);
          sk.pop();
          sk.translate(250, 0, 0);
          sk.push();
          sk.rotateZ(1.57);
          sk.rotateX(0);
          sk.rotateY(0);
          sk.ambientMaterial(0);
          sk.cylinder(10, 100);
          sk.pop();
          sk.translate(250, 0, 0);
          sk.push();
          sk.rotateZ(1.57);
          sk.rotateX(0);
          sk.rotateY(0);
          sk.ambientMaterial(0);
          sk.cylinder(10, 100);
          sk.pop();
        }
      }
      const P5 = new p5(canvas);
      */
    cytoscape.use(dagre);
    var cy = cytoscape({
        container: document.getElementById("canvas"),
        boxSelectionEnabled: false,
        autounselectify: true,

        layout: {
            name: "dagre"
        },

        style: [
            {
                selector: "node",
                style: {
                    content: "data(id)",
                    "text-opacity": 0.5,
                    "text-valign": "center",
                    "text-halign": "right",
                    "background-color": "#11479e"
                }
            },

            {
                selector: "edge",
                style: {
                    "curve-style": "bezier",
                    width: 4,
                    "target-arrow-shape": "triangle",
                    "line-color": "#9dbaea",
                    "target-arrow-color": "#9dbaea"
                }
            }
        ],

        elements: {
            nodes: [
                { data: { id: "n0" } },

            ],
            edges: [
            ]
        }
    });

    corteR(tprecios, longitud, 0, cy, null);
    console.log(pila);

}
function corteR(precios, longitud, nivel, cy,  padre) {
    padre = arbol.addValue(longitud, padre);
    pila.push(padre);
    var valmax = Number.MIN_VALUE;
    var valor = 0;
    if (longitud <= 0) {
        return 0;
    }
    nivel++;
    //console.log(precios)
    for (let i = 0; i < longitud; i++) {
        valor = parseInt(precios[i])
        var aux = corteR(precios, longitud - i - 1, nivel, cy,  padre);
        valor = valor + aux;
        console.log(valor, precios[i], aux, "nivel: " + nivel);
        if (valor > valmax) {
            valmax = valor;
        }

    }

    return valmax;
}

export default crearAnimacion;
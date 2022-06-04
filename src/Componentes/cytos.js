import Sim from './sim';
import cytoscape from 'cytoscape';
import * as p5 from 'p5';
import Tree from './Tree/Tree';
import dagre from 'cytoscape-dagre';

var arbol;
var pila = [];
var valsMax = [];

function crearAnimacion(tprecios, longitud) {
  var selector = document.getElementById('tamñoElegido').value;
  //var valor = selector.getAttributeNode();
  console.log(selector);
  arbol = new Tree();
  corteR(tprecios, longitud, null);
  let nodes = [];
  let edges = [];
  pila.forEach(nodo =>
    nodes.push({ data: { id: nodo.id.toString(), value: nodo.value.toString() } })
  );
  valsMax.sort(function(a, b){return a[0]-b[0]});
  for (let i = 1; i < pila.length; i++) {
    edges.push({ data: { source: pila[i].parent.id.toString(), target: pila[i].id.toString(), valmax: "↑ "+valsMax[i][1].toString()} });
  }
  nodes[0].data.value = valsMax[0][1].toString() + " "+pila[0].value.toString();
  console.log(edges);
  console.log(valsMax);
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
          content: "data(value)",
          "text-opacity": 0.5,
          "text-valign": "center",
          "text-halign": "right",
          "background-color": "#11479e"
        }
      },

      {
        selector: "edge",
        style: {
          content: "data(valmax)",
          "curve-style": "bezier",
          width: 4,
          "target-arrow-shape": "triangle",
          "line-color": "#9dbaea",
          "target-arrow-color": "#9dbaea"
        }
      }
    ],

    elements: {
      nodes,
      edges
    }
  });

}
function corteR(precios, longitud, padre) {
  padre = arbol.addValue(longitud, padre);
  pila.push(padre);
  var valmax = Number.MIN_VALUE;
  var valor = 0;
  if (longitud <= 0) {
    valsMax.push([padre.id, 0]);
    return 0;
  }
  for (let i = 0; i < longitud; i++) {
    valor = parseInt(precios[i])
    var aux = corteR(precios, longitud - i - 1, padre);
    valor = valor + aux;
    if (valor > valmax) {
      valmax = valor;
    }
  }
  valsMax.push([padre.id, valmax]);
  return valmax;
}

export default crearAnimacion;
import cytoscape from 'cytoscape';
import Tree from './Tree/Tree';
import dagre from 'cytoscape-dagre';
import anime from 'animejs';


var arbol;
var pila = [];
var valsMax = [];

function crearAnimacion(tprecios, longitud) {
  pila = [];
  valsMax = [];
  var selector = document.getElementById('tamñoElegido').value;
  arbol = new Tree();
  corteR(tprecios, longitud, null);
  let nodes = [];
  let edges = [];
  console.log(valsMax)
  pila.forEach(nodo =>
    nodes.push({ data: { id: nodo.id.toString(), value: nodo.value.toString() }, position: { x: 0, y: 0 } })
  );
  valsMax.sort(function (a, b) { return a[0] - b[0] });
  for (let i = 1; i < pila.length; i++) {
    edges.push({ data: { source: pila[i].parent.id.toString(), target: pila[i].id.toString(), valmax: "↑ " + valsMax[i][1].toString() } });
  }
  nodes[0].data.value = valsMax[0][1].toString() + " " + pila[0].value.toString();
  nodes[0].position.x = 890;
  nodes[0].position.y = 490;
  cytoscape.use(dagre);
  var cy = cytoscape({
    container: document.getElementById("canvas"),
    boxSelectionEnabled: false,
    autounselectify: true,

    layout: {
      name: "dagre",
    },

    style: [
      {
        selector: "node",
        style: {
          content: "data(value)",
          "text-opacity": 0.5,
          "text-valign": "center",
          "text-halign": "right",
          "background-color": "#02457A"
        }
      },

      {
        selector: "edge",
        style: {
          content: "data(valmax)",
          "curve-style": "bezier",
          width: 4,
          "target-arrow-shape": "triangle",
          "line-color": "#97cADB",
          "target-arrow-color": "#97cADB"
        }
      }
    ],

    elements: {
      nodes,
      edges
    }
  });

  animacionArbol(cy);

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

function animacionArbol(cy) {
  var nodes = cy.nodes();
  var edges = cy.edges();
  var posFinal = [];
  var posInicial = [];


  for (let i = 0; i < nodes.length; i++) {
    posFinal.push({ x: nodes[i].position().x, y: nodes[i].position().y });
    posInicial.push({ x: nodes[i].connectedEdges()[0].source().position('x'), y: nodes[i].connectedEdges()[0].source().position('y') });
    nodes[i].style({
      'opacity': 0,
    });
  }

  edges.forEach(edge => {
    edge.style({
      'opacity': 0,
    })
  })

  var animation = anime.timeline({
    autoplay: true,
    delay: 400,
    duration: 1100,
    endDelay: 400,
    easing: 'easeOutBounce',
  });

  for (let i = 0, e = 1; i < nodes.length; i++, e++) {
    animation.add({
      targets: posInicial[i],
      duration: 1100,
      x: posFinal[i].x,
      y: posFinal[i].y,
      update: (anim) => {
        nodes[i].position(anim.animatables[0].target);
        nodes[i].style({
          'opacity': 1
        });
        if (i != 0) {
          nodes[i].connectedEdges()[0].style({
            'opacity': 1
          });
          cy.center(nodes[i]);
        }
      }
    });
  }
  animation.add({
    duration: 100,
    update: (anim) => {
      cy.center();
    }
  })

  const handlerAnimRestart = () => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style({
        'opacity': 0,
      });
      if (i != 0) {
        nodes[i].connectedEdges()[0].style({
          'opacity': 0
        });
      }
    }
    animation.restart();
  }

  document.getElementById("play").onclick = animation.play;
  document.getElementById("pause").onclick = animation.pause;
  document.getElementById("restart").onclick = handlerAnimRestart;
}

export default crearAnimacion;
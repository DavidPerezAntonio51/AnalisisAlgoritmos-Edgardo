import cytoscape from 'cytoscape';
import Tree from './Tree/Tree';
import dagre from 'cytoscape-dagre';
import anime from 'animejs';


var arbol;
var pila = [];
var valsMax = [];

function crearAnimacion(tprecios, longitud) {
  var selector = document.getElementById('tamñoElegido').value;
  //var valor = selector.getAttributeNode();
  ////console.log(selector);
  arbol = new Tree();
  corteR(tprecios, longitud, null);
  let nodes = [];
  let edges = [];
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
  ////console.log(edges);
  ////console.log(valsMax);
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

  //console.log(cy.nodes()[9].connectedEdges()[0].source().id());
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
  var nodo0 = cy.$id('0');
  var nodo1 = cy.$id('1');

  var posN0 = cy.$id('0').position();
  var posN1 = cy.$id('1').position();

  var nodes = cy.nodes();
  var edges = cy.edges();
  var posFinal = [];
  var posInicial = [];
  

  for (let i = 1; i < nodes.length; i++) {
    posFinal.push({x: nodes[i].position().x, y: nodes[i].position().y});
    nodes[i].style({
      'opacity': 0,
    });
  }
  for (let i = 1; i < nodes.length; i++){
    //console.log(posFinal[parseInt(nodes[i].connectedEdges()[0].source().id(), 10)]);
    if (parseInt(nodes[i].connectedEdges()[0].source().id(), 10) == 0){
      nodes[i].position({ 
        x: nodes[0].position('x'),
        y: nodes[0].position('y') 
      });
    }
    nodes[i].position({ 
      x: posFinal[parseInt(nodes[i].connectedEdges()[0].source().id(), 10)].x,
      y: posFinal[parseInt(nodes[i].connectedEdges()[0].source().id(), 10)].y 
    });
    //console.log(nodes[i].position());
    posInicial.push({
      x: nodes[i].position('x'),
      y: nodes[i].position('y')
    });
  }
  //console.log(posFinal, posInicial);

  edges.forEach(edge => {
    edge.style({
      'opacity': 0,
    })
  })

  ////console.log(posFinal.length);

  var animation = anime.timeline({
    targets: posInicial[0],
    autoplay: true,
    delay: 400,
    duration: 1100,
    endDelay: 400,
    easing: 'linear',
    /*update: (anim) => {
      nodes[0].position(anim.animatables[0].target);
    }*/
  });
  
  for (let i = 1; i < nodes.length; i++) {
    animation.add({
      targets: posInicial[i-1],
      duration: 1100,
      x: posFinal[i-1].x,
      y: posFinal[i-1].y,
      update: (anim) => {
        nodes[i].position(anim.animatables[0].target);
        nodes[i].style({
          'opacity': 1
        });
        edges[i-1].style({
          'opacity': 1
        });
      }
    });
  }

  /*anime({
    targets: posInicial,
    duration: 3000,
    easing: 'linear',
    x: 20,
    y: 20,
    update: (anim) => {
      for (let i = 0; i < anim.animatables.length; i++) {
        nodes[i].position(anim.animatables[i].target);
      }
    }
  });*/

}

export default crearAnimacion;
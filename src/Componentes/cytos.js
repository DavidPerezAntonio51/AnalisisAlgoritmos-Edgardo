import cytoscape from 'cytoscape';
import Tree from './Tree/Tree';
import dagre from 'cytoscape-dagre';
import Zdog from 'zdog';


var arbol;
var pila = [];
var valsMax = [];
var animateGraphBuilding;
var nodes;

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
  valsMax.sort(function (a, b) { return a[0] - b[0] });
  for (let i = 1; i < pila.length; i++) {
    edges.push({ data: { source: pila[i].parent.id.toString(), target: pila[i].id.toString(), valmax: "↑ " + valsMax[i][1].toString() } });
  }
  nodes[0].data.value = valsMax[0][1].toString() + " " + pila[0].value.toString();
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

  cy.nodes().forEach(nodo => console.log(nodo.position(), nodo.renderedPosition()));

  animacionArbol(cy);

  cy.destroy();

  document.getElementById('canvas').appendChild(document.createElement('canvas'));

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
  // from the Zdog object extract the necessary modules
  const {
    Illustration, Ellipse, Rect, Shape, Group, Anchor,
  } = Zdog;

  // set up the illustration within the existing canvas element
  const illustration = new Illustration({
    element: 'canvas',
    dragRotate: false,
  });

  // below the star draw a circle with a fill and no stroke, for the shadow
  cy.nodes().forEach(nodo => {
    const node = new Ellipse({
      addTo: illustration,
      diameter: 40,
      stroke: false,
      fill: true,
      color: 'hsla(45, 100%, 58%, 1)',
      translate: {x: nodo.renderedPosition('x'), y: nodo.renderedPosition('y')},
    });
    console.log(nodo.renderedPosition());
  });

  /*/ include an anchor point for the star
  // ! position the star atop the anchor, to have the rotation occur around this point
  const starAnchor = new Anchor({
    addTo: illustration,
    translate: { y: 100 },
    rotate: { z: Math.PI / 10 },
  });

  // draw a star in a group element positioned atop the anchor point
  const starGroup = new Group({
    addTo: starAnchor,
    translate: { x: -70, y: -170 }, // -70 to center the 140 wide shape
  });

  // draw the path describing the star
  new Shape({
    addTo: starGroup,
    path: [
      { x: 0, y: 45 },
      { x: 45, y: 45 },
      { x: 70, y: 0 },
      { x: 95, y: 45 },
      { x: 140, y: 45 },
      { x: 105, y: 80 },
      { x: 120, y: 130 },
      { x: 70, y: 105 },
      { x: 20, y: 130 },
      { x: 35, y: 80 },
      { x: 0, y: 45 },
    ],
    stroke: 40,
    color: 'hsl(45, 100%, 58%)',
  });
  // within the path include a rectangle to remove the gap between the center of the star and its stroke
  new Rect({
    addTo: starGroup,
    width: 40,
    height: 50,
    stroke: 40,
    translate: { x: 70, y: 70 },
    color: 'hsl(45, 100%, 58%)',
  });

  // include a group for the eyes, positioned halfway through the height of the star
  const eyesGroup = new Group({
    addTo: starGroup,
    translate: { x: 70, y: 72.5, z: 20 },
  });

  // add black circles describing the contour of the eyes, and either end of the star
  const eye = new Ellipse({
    addTo: eyesGroup,
    diameter: 5,
    stroke: 15,
    translate: { x: -32.5 },
    color: 'hsl(0, 0%, 0%)',
  });
  eye.copy({
    translate: { x: 32.5 },
  });

  // add an anchor point for the white part of the eyes
  // by later translating the white part of the eyes, the rotation allows to have the circle rotate around the anchor point
  const leftEyeAnchor = new Anchor({
    addTo: eyesGroup,
    translate: { x: -32.5, z: 0.5 },
  });
  const leftEye = new Ellipse({
    addTo: leftEyeAnchor,
    diameter: 1,
    stroke: 5,
    color: 'hsl(0, 100%, 100%)',
    translate: { x: -3.5 },
  });

  // copy the left anchor for the right side
  const rightEyeAnchor = leftEyeAnchor.copyGraph({
    translate: { x: 32.5, z: 0.5 },
  });

  // include an anchor point for the mouth
  // by centering the mouth around the anchor and scaling the anchor itself, the change in size occurs from the center of the mouth
  const mouthAnchor = new Anchor({
    addTo: starGroup,
    translate: { x: 70, y: 95, z: 20 },
    scale: 0.8,
  });
  // draw a mouth with a line and arc commands
  const mouth = new Shape({
    addTo: mouthAnchor,
    path: [
      { x: -8, y: 0 },
      { x: 8, y: 0 },
      {
        arc: [
          { x: 4, y: 6 },
          { x: 0, y: 6 },
        ],
      },
      {
        arc: [
          { x: -4, y: 6 },
          { x: -8, y: 0 },
        ],
      },
    ],
    stroke: 10,
    color: 'hsl(358, 100%, 65%)',
  });*/

  illustration.updateRenderGraph();

  /* to animate the star, change the transform property as follows
  
  |variableName|transform|valueRange|
  |---|---|---|
  |starAnchor|rotate.z|[Math.PI/10, -Math.PI/10]|
  |leftIrisAnchor && rightIrisAnchor|rotate.z|[0, Math.PI/2]|
  |mouthAnchor|scale|[0.8, 1.2]|
  |shadow|translate.x|[50, -50]|

  // ! I am positive there are much better ways to achieve this animation, but this is my take using anime.js
  // I am still a newbie when it comes to animation
  // create an object describing the values for the different elements
  const starObject = {
    star: Math.PI / 10,
    shadow: 50,
    mouth: 0.8,
    eyes: 0
  }

  // set up a repeating animation which constantly updates the illustration and updates the desired transform properties according to the object's values
  const timeline = anime.timeline({
    duration: 1100,
    easing: 'easeInOutQuart',
    direction: 'alternate',
    loop: true,
    update: () => {
      starAnchor.rotate.z = starObject.star;
      shadow.translate.x = starObject.shadow;
      mouth.scale = starObject.mouth;
      leftEyeAnchor.rotate.z = starObject.eyes;
      rightEyeAnchor.rotate.z = starObject.eyes;

      illustration.updateRenderGraph();
    }
  });

  // animate the star with a slightly more pronounced easing function
  timeline.add({
    targets: starObject,
    star: -Math.PI / 10,
    easing: 'easeInOutQuint',
  });
  // have the shadow follow with a small delay
  timeline.add({
    targets: starObject,
    delay: 20,
    shadow: -50,
  }, '-=1100')

  // with a smaller duration and slightly postponed, animate the mouth and the eyes
  timeline.add({
    targets: starObject,
    mouth: 1.2,
    duration: 300,
  }, '-=800');

  timeline.add({
    targets: starObject,
    eyes: Math.PI / 2,
    duration: 900,
  }, '-=1000');*/
}

export default crearAnimacion;
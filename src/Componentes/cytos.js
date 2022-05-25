import Sim from './sim';
import cytoscape from 'cytoscape';
import * as p5 from 'p5';

function crearAnimacion(tamaño, precios) {
    var selector = document.getElementById('tamñoElegido').value;
    //var valor = selector.getAttributeNode();
    console.log(selector);

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
          /*sk.translate(250, 0, 0);
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
          sk.pop();*/
        }
      }
      const P5 = new p5(canvas);
    /*var cy = cytoscape({
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
        // so we can see te ids
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(id)'
                }
            }
        ],
    });*/
    let options = {
        name: 'grid',
        fit: true,
        rows: 1,
        //ready: function () { }, // on layoutready
        //stop: function () { } // on layoutstop
    };
    cy.layout(options).run();
}
export default crearAnimacion;
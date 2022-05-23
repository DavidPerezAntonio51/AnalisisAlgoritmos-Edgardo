import cytoscape from 'cytoscape';
function crearAnimacion(tamaño, precios) {
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
        // so we can see te ids
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(id)'
                }
            }
        ],
    });
    let options = {
        name: 'null',

        ready: function () { }, // on layoutready
        stop: function () { } // on layoutstop
    };

    cy.layout(options).run();
}

export default crearAnimacion;
import Zdog from 'zdog';
import zfont from 'zfont';

var arr = [1, 5, 8, 9, 10, 17, 17, 20];
var size = arr.length;
function cutRod(price, n) {
    var max_val = Number.MIN_VALUE;
    var val = Array(n + 1).fill(0);
    val[0] = 0;
    var valor = 0;
    for (let i = 1; i <= n; i++) {
        var max_val = Number.MIN_VALUE;
        for (let j = 0; j < i; j++) {
            valor = price[j] + val[i - j - 1];
            if (valor > max_val) {
                max_val = valor;
            }
        }
        val[i] = max_val;
    }
    return val[n];
}

function main()
{
    const {
        Illustration, Ellipse, Rect, Shape, Group, Anchor,
      } = Zdog;
      
      // set up the illustration within the existing canvas element
      const illustration = new Illustration({
        element: 'canvas',
        dragRotate: true,
      });
      
      // below the star draw a circle with a fill and no stroke, for the shadow
      
      for (let i = 0; i<4;i++){
        console.log("hola");
        const shadow = new Rect({
          addTo: illustration,
          width: 120,
          height: 80,
          stroke: 20,
          //fill: true,
          color: 'hsla(45, 100%, 58%, 0.4)',
          translate: { x: 50+120*i, y: 100 },
        });
      }
      
      
      illustration.updateRenderGraph();
}

export default main;
import Zdog from 'zdog';
import Zfont from 'zfont';

function main(n, prices) {
  animacionDP(n, prices);
}

function animacionDP(n, prices) {

  var canvas = document.getElementById('canvas');
  var width = canvas.width;
  var height = canvas.height;
  console.log(width, height)

  Zfont.init(Zdog);
  const {
    Illustration, Ellipse, Rect, Shape, Group, Anchor,
  } = Zdog;

  // set up the illustration within the existing canvas element
  const illustration = new Illustration({
    element: 'canvas',
    dragRotate: true,
  });

  let myFont = new Zdog.Font({
    src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf",
  });

  let div = new Zdog.Rect({
    addTo: illustration,
    width: 80 * n + 1,
    height: 80,
    stroke: 20,
    color: 'hsla(207, 0%, 100%, 0.0)',
  })
  // create original

  let valsListBG = new Zdog.Rect({
    addTo: div,
    width: 80,
    height: 80,
    translate: { x: -((80 * n) / 2) + 40, y: (height / 2) - 45 },
    fill: true,
    color: 'hsla(195, 31%, 73% , 0.5)',
  });

  let valsList = new Zdog.Rect({
    addTo: valsListBG,
    width: 80,
    height: 80,
    stroke: 12,
    color: '#97cADB',
  });


  let pricesBoxes = [];
  let pricesListBG;
  pricesBoxes[n] = pricesListBG = new Zdog.Rect({
    addTo: illustration,
    width: 40,
    height: 40,
    translate: { x: width / 2 - 25, y: -(height / 2) + 25 },
    fill: true,
    color: 'hsla(197, 99%, 37%, 0.5)',
  });

  let pricesList = new Zdog.Rect({
    addTo: pricesListBG,
    width: 40,
    height: 40,
    stroke: 5,
    color: '#018ABE',
  });

  for (let i = 1; i <= n; i++) {
    // copy
    valsListBG.copyGraph({
      // overwrite original options
      translate: { x: -((80 * n) / 2) + 40 + 80 * i, y: (height / 2) - 45 },
    });
  }

  for (let i = n; i > 1; i--) {
    pricesBoxes[n - i] = pricesListBG.copyGraph({
      translate: { x: ((width / 2) + 15) - 40 * i, y: -(height / 2) + 25 },
    });
  }
  console.log(pricesBoxes);

  var pricesText = [];
  for (let i = 0; i < n; i++) {
    pricesText[i] = new Zdog.Text({
      addTo: pricesBoxes[i],
      font: myFont,
      value: prices[i],
      fontSize: 30,
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#000000',
      fill: true
    });
    pricesText[i].translate.y -= 5;
  }
  console.log(pricesText);
  illustration.updateRenderGraph();

  function animate() {
    cinco.translate.x += true ? -0.03 : 0;
    illustration.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  //animate();
}

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

export default main;
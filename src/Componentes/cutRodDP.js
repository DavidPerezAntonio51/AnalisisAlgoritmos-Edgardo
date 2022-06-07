import Zdog from 'zdog';
import Zfont from 'zfont';
import anime from 'animejs';

function main(n, prices) {
  for (let i = 0; i < n; i++) {
    prices[i] = parseInt(prices[i], 10);
  }
  cutRod(n, prices);
}

function cutRod(n, prices) {
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

  let valsBoxes = [];
  let valsListBG;
  valsBoxes.push(valsListBG = new Zdog.Rect({
    addTo: div,
    width: 80,
    height: 80,
    translate: { x: -((80 * n) / 2) + 40, y: (height / 2) - 45 },
    fill: true,
    color: 'hsla(195, 31%, 73% , 0.5)',
  }));

  let valsList = new Zdog.Rect({
    addTo: valsListBG,
    width: 80,
    height: 80,
    stroke: 12,
    color: '#97cADB',
  });


  let pricesBoxes = [];
  let pricesListBG;
  pricesBoxes[n - 1] = pricesListBG = new Zdog.Rect({
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
    valsBoxes.push(valsListBG.copyGraph({
      // overwrite original options
      translate: { x: -((80 * n) / 2) + 40 + 80 * i, y: (height / 2) - 45 },
    }));
  }

  for (let i = n; i > 1; i--) {
    pricesBoxes[n - i] = pricesListBG.copyGraph({
      translate: { x: ((width / 2) + 15) - 40 * i, y: -(height / 2) + 25 },
    });
  }
  console.log(valsBoxes);

  var pricesText = [];
  for (let i = 0; i < n; i++) {
    pricesText[i] = new Zdog.Text({
      addTo: pricesBoxes[i],
      font: myFont,
      value: prices[i].toString(),
      fontSize: 28,
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#000000',
      fill: true
    });
    pricesText[i].translate.y = -7;
    pricesText[i].scale = 0;
  }

  console.log(pricesText);
  illustration.updateRenderGraph();

  const timeline = anime.timeline({
    duration: 1100,
    easing: 'easeOutElastic',
    direction: 'alternate',
    autoplay: true,
    loop: false,
  });
  for (let i = 0; i < n; i++) {
    timeline.add({
      targets: pricesText[i],
      scale: 1,
      duration: 1100,
      update: () => {
        illustration.updateRenderGraph();
      }
    });
  }

  //animate();
  var max_val = Number.MIN_VALUE;
  var val = Array(n + 1).fill(0);
  val[0] = 0;

  let valsText = [];
  for (let i = 0; i <= n; i++) {
    valsText[i] = new Zdog.Text({
      addTo: valsBoxes[i],
      font: myFont,
      value: (val[i]).toString(),
      fontSize: 40,
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#000000',
      fill: true
    });
    valsText[i].scale = 0;
    valsText[i].translate.y = -9;
  }

  var valor = 0;

  var rectVA = new Zdog.Rect({
    addTo: illustration,
    width: 200,
    height: 35,
    fill: true,
    color: '#97cADB',
    translate: { x: -(width / 2) + 105, y: -(height / 2) + 20 },
  });

  new Zdog.Text({
    addTo: rectVA,
    font: myFont,
    value: 'Valor Actual:',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true
  }).translate = { x: 3, y: -7 };

  var rectSVA = new Zdog.Rect({
    addTo: illustration,
    width: 60,
    height: 35,
    stroke: 0,
    translate: { x: -(width / 2) + 240, y: -(height / 2) + 20 },
  });

  var vaVal = new Zdog.Text({
    addTo: rectSVA,
    font: myFont,
    value: '0',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true
  });
  vaVal.scale = 0;
  vaVal.translate = { x: -1, y: -8 };

  var rectI = new Zdog.Rect({
    addTo: illustration,
    width: 40,
    height: 35,
    fill: true,
    color: '#97cADB',
    translate: { x: -(width / 2) + 25, y: -(height / 2) + 60 },
  });

  new Zdog.Text({
    addTo: rectI,
    font: myFont,
    value: 'i:',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true
  }).translate = { x: 2, y: -8 };

  var rectSI = new Zdog.Rect({
    addTo: illustration,
    width: 40,
    height: 35,
    stroke: 0,
    translate: { x: -(width / 2) + 70, y: -(height / 2) + 60 },
  });

  var iVal = new Zdog.Text({
    addTo: rectSI,
    font: myFont,
    value: '1',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    scale: 0,
    fill: true
  });
  iVal.scale = 0;
  iVal.translate = { x: -1, y: -8 };

  var rectJ = new Zdog.Rect({
    addTo: illustration,
    width: 40,
    height: 35,
    fill: true,
    color: '#97cADB',
    translate: { x: -(width / 2) + 25, y: -(height / 2) + 100 },
  });

  new Zdog.Text({
    addTo: rectJ,
    font: myFont,
    value: 'j:',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true
  }).translate = { x: 2, y: -8 };

  var rectSJ = new Zdog.Rect({
    addTo: illustration,
    width: 40,
    height: 35,
    stroke: 0,
    translate: { x: -(width / 2) + 70, y: -(height / 2) + 100 },
  });

  var jVal = new Zdog.Text({
    addTo: rectSJ,
    font: myFont,
    value: '0',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    scale: 0,
    fill: true
  });
  jVal.scale = 0;
  jVal.translate = { x: -1, y: -8 };

  var rectVM = new Zdog.Rect({
    addTo: illustration,
    width: 210,
    height: 35,
    fill: true,
    color: '#97cADB',
    translate: { x: -(width / 2) + 110, y: -(height / 2) + 140 },
  });

  new Zdog.Text({
    addTo: rectVM,
    font: myFont,
    value: 'Valor Máximo:',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true
  }).translate = { x: 3, y: -7 };

  var rectSVM = new Zdog.Rect({
    addTo: illustration,
    width: 60,
    height: 35,
    stroke: 0,
    translate: { x: -(width / 2) + 250, y: -(height / 2) + 140 },
  });

  var vmVal = new Zdog.Text({
    addTo: rectSVM,
    font: myFont,
    value: '-inf',
    fontSize: 30,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    scale: 0,
    fill: true
  });
  vmVal.scale = 0;
  vmVal.translate = { x: -1, y: -8 };

  const timeline1 = anime.timeline({
    duration: 1100,
    easing: 'easeOutElastic',
    direction: 'alternate',
    autoplay: true,
    loop: false,
  });

  for (let i = 0; i <= n; i++) {
    timeline1.add({
      targets: valsText[i],
      scale: 1,
      duration: 1100,
      update: () => {
        illustration.updateRenderGraph();
      }
    });
  }

  console.log(valsText[0], vaVal)
  timeline1.add({
    targets: [vaVal, iVal, jVal, vmVal],
    scale: 1,
    duration: 1100,
    update: () => {
      illustration.updateRenderGraph();
    }
  });

  for (let i = 1; i <= n; i++) {
    timeline1.add({
      duration: 1100,
      update: () => {
        iVal.value = (i).toString(),
        jVal.value = '0',
        illustration.updateRenderGraph();
      }
    });
    var max_val = Number.MIN_VALUE;
    for (let j = 0; j < i; j++) {
      timeline1.add({
        duration: 1100,
        update: () => {
          jVal.value = (j).toString(),
          illustration.updateRenderGraph();
        }
      });
      valor = prices[j] + val[i - j - 1];
      timeline1.add({
        duration: 1100,
        update: () => {
          vaVal.value = (valor).toString(),
          illustration.updateRenderGraph();
        }
      });
      if (valor > max_val) {
        max_val = valor;
        timeline1.add({
          duration: 1100,
          update: () => {
            vmVal.value = (max_val).toString(),
            illustration.updateRenderGraph();
          }
        });
      }
    }
    val[i] = max_val;
  }

  for (let i = 0; i <= n; i++){
    timeline1.add({
      duration: 1100,
      update: () => {
        valsText[i].value = (val[i]).toString(),
        illustration.updateRenderGraph();
      }
    });
  }
  return val[n];
}

export default main;
import Zdog from 'zdog';
import Zfont from 'zfont';
import anime from 'animejs';

let myFont;

function main(n, prices) {

  Zfont.init(Zdog);

  myFont = new Zdog.Font({
    src: 'https://cdn.jsdelivr.net/npm/@expo-google-fonts/quicksand@0.2.2/Quicksand_400Regular.ttf'
  });

  for (let i = 0; i < n; i++) {
    prices[i] = parseInt(prices[i], 10);
  }

  Zdog.waitForFonts().then(cutRod(n, prices));
}

function cutRod(n, prices) {
  var canvas = document.getElementById('canvas');
  var width = canvas.width;
  var height = canvas.height;
  console.log(width, height)

  const {
    Illustration, Ellipse, Rect, Shape, Group, Anchor,
  } = Zdog;

  // set up the illustration within the existing canvas element
  const illustration = new Illustration({
    element: 'canvas',
    dragRotate: true,
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

  let divop = new Zdog.Rect({
    addTo: illustration,
    width: 100 * 5,
    height: 100,
    stroke: 0,
    translate: { x: 35 },
  });

  let op1 = new Zdog.Rect({
    addTo: divop,
    width: 100,
    height: 100,
    stroke: 10,
    translate: { x: -200 }
  });

  let op2 = new Zdog.Rect({
    addTo: divop,
    width: 100,
    height: 100,
    stroke: 10,
    translate: { x: -100 }
  });

  let mas = new Zdog.Text({
    addTo: op2,
    font: myFont,
    value: '+',
    fontSize: 56,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true,
    translate: { y: -15 }
  });

  mas.scale = 0;

  let op3 = new Zdog.Rect({
    addTo: divop,
    width: 100,
    height: 100,
    stroke: 10,
  });

  let mque = new Zdog.Text({
    addTo: op3,
    font: myFont,
    value: '>',
    fontSize: 56,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true,
    translate: { y: -15 }
  });

  mque.scale = 0;

  let op4 = new Zdog.Rect({
    addTo: divop,
    width: 100,
    height: 100,
    stroke: 10,
    translate: { x: 100 }
  });

  let igual = new Zdog.Text({
    addTo: op4,
    font: myFont,
    value: '=',
    fontSize: 56,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true,
    translate: { y: -15 }
  });

  igual.scale = 0;

  let op5 = new Zdog.Rect({
    addTo: divop,
    width: 100,
    height: 100,
    stroke: 10,
    translate: { x: 200 }
  });

  let valOp5 = new Zdog.Text({
    addTo: op5,
    font: myFont,
    value: '.',
    fontSize: 56,
    textAlign: 'center',
    textBaseline: 'middle',
    color: '#000000',
    fill: true,
    translate: { y: -15 }
  });

  valOp5.scale = 0;

  divop.addChild(op1);

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
    width: 185,
    height: 35,
    fill: true,
    color: '#97cADB',
    translate: { x: -(width / 2) + 98, y: -(height / 2) + 20 },
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
  }).translate = { x: 2, y: -7 };

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
  }).translate = { x: 1, y: -7 };

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

  timeline1.add({
    targets: [vaVal, iVal, jVal, vmVal],
    scale: 1,
    duration: 1100,
    update: () => {
      illustration.updateRenderGraph();
    }
  });

  console.log(vaVal, op1);
  for (let i = 1; i <= n; i++) {
    timeline1.add({
      duration: 1100,
      update: () => {
        iVal.value = (i).toString();
        jVal.value = '0';
        vmVal.value = '-inf';
        illustration.updateRenderGraph();
      }
    });
    var max_val = Number.MIN_VALUE;
    for (let j = 0; j < i; j++) {
      timeline1.add({
        duration: 1100,
        update: () => {
          jVal.value = (j).toString();
          illustration.updateRenderGraph();
        }
      });
      valor = prices[j] + val[i - j - 1];

      timeline1.add({
        targets: pricesText[j],
        update: () => {
          op1.addChild(pricesText[j]);
          pricesText[j].translate = { y: -20 };
          illustration.updateRenderGraph();
        },
        scale: 2.5,
        duration: 1100,
      });
      timeline1.add({
        targets: mas,
        scale: 1,
        duration: 1100,
        update: () => {
          illustration.updateRenderGraph();
        },
      });
      timeline1.add({
        targets: valsText[i - j - 1],
        update: () => {
          op3.addChild(valsText[i - j - 1]);
          valsText[i - j - 1].translate = { y: -20 };
          illustration.updateRenderGraph();
        },
        scale: 1.8,
        duration: 1100,
      });
      timeline1.add({
        targets: igual,
        scale: 1,
        duration: 1100,
        update: () => {
          illustration.updateRenderGraph();
        },
      });
      timeline1.add({
        targets: [valOp5, vaVal],
        duration: 1100,
        update: () => {
          valOp5.visible = true;
          valOp5.value = (prices[j] + val[i - j - 1]).toString();
          vaVal.value = (prices[j] + val[i - j - 1]).toString();
          valOp5.scale = 1;
          illustration.updateRenderGraph();
        },
      });
      timeline1.add({
        targets: rectSVA,
        duration: 1100,
        update: () => {
          rectSVA.addChild(vaVal);
          vaVal.scale = 1;
          igual.scale = 0;
          valsBoxes[i - j - 1].addChild(valsText[i - j - 1]);
          valsText[i - j - 1].scale = 1;
          valsText[i - j - 1].translate = { y: -9 };
          mas.scale = 0;
          pricesBoxes[j].addChild(pricesText[j]);
          pricesText[j].scale = 1;
          pricesText[j].translate = { y: -7 };
          valOp5.visible = false;
          illustration.updateRenderGraph();
        }
      });
      if (valor > max_val) {
        max_val = valor;
        timeline1.add({
          duration: 1100,
          update: () => {
            op2.addChild(vaVal);
            vaVal.translate = { y: -20 };
            vaVal.scale = 2;
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          duration: 1100,
          update: () => {
            op4.addChild(vmVal);
            vmVal.translate = { y: -20 };
            vmVal.scale = 2;
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          targets: mque,
          duration: 1100,
          update: () => {
            mque.scale = 1;
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          duration: 1100,
          update: () => {
            vmVal.value = val[i].toString();
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          duration: 1100,
          update: () => {
            rectSVA.addChild(vaVal);
            vaVal.translate = { y: -8 };
            vaVal.scale = 1;
            mque.scale = 0;
            rectSVM.addChild(vmVal);
            vmVal.translate = { y: -8 };
            vmVal.scale = 1;
            illustration.updateRenderGraph();
          }
        });
      } else {
        timeline1.add({
          duration: 1100,
          update: () => {
            op2.addChild(vaVal);
            vaVal.translate = { y: -20 };
            vaVal.scale = 2;
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          duration: 1100,
          update: () => {
            op4.addChild(vmVal);
            vmVal.translate = { y: -20 };
            vmVal.scale = 2;
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          targets: mque,
          duration: 1100,
          update: () => {
            mque.value = '<';
            mque.scale = 1;
            illustration.updateRenderGraph();
          }
        });
        timeline1.add({
          duration: 1100,
          update: () => {
            rectSVA.addChild(vaVal);
            vaVal.translate = { y: -8 };
            vaVal.scale = 1;
            mque.scale = 0;
            rectSVM.addChild(vmVal);
            vmVal.translate = { y: -8 };
            mque.value = '>';
            vmVal.scale = 1;
            illustration.updateRenderGraph();
          }
        });
      }
    }
    timeline1.add({
      duration: 1100,
      update: () => {
        valsText[i].value = val[i].toString();
        illustration.updateRenderGraph();
      }
    });
    val[i] = max_val;
  }

  // for (let i = 0; i <= n; i++) {
  //   timeline1.add({
  //     duration: 1100,
  //     update: () => {
  //       valsText[i].value = (val[i]).toString(),
  //         illustration.updateRenderGraph();
  //     }
  //   });
  // }
  return val[n];
}

export default main;
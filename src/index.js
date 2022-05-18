import * as p5 from 'p5';
const canvas = (sk) => {
  sk.setup = () => {
    sk.createCanvas(1000, 500, sk.WEBGL);
    sk.background(0, 0, 0);
  }
  sk.draw = () => {
    sk.background(1000);
    sk.translate(-250, 0, 0);

    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
    sk.translate(250, 0, 0);
    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
    sk.translate(250, 0, 0);
    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
  }
}
const P5 = new p5(canvas);
function setup() {
  createCanvas(1000, 500);
  background(0,0,0);
}

function draw() {
  background(1000);
  translate(-250, 0, 0);

  push();
  rotateZ(1.57);
  rotateX(0);
  rotateY(0);
  ambientMaterial(0);
  cylinder(30, 200);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(1.57);
  rotateX(0);
  rotateY(0);
  ambientMaterial(0);
  cylinder(30, 200);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(1.57);
  rotateX(0);
  rotateY(0);
  ambientMaterial(0);
  cylinder(30, 200);
  pop();
  
}
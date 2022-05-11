var main = document.getElementById("main");
console.log(window.screen.width);
let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(1080,720);
      p.background(1);
    }
  };
  new p5(sketch, main);
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
import 'bootstrap';
import './css/styles.css'
var stage = new createjs.Stage("demoCanvas");
var circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
circle.x = circle.y = 100;
stage.addChild(circle);
stage.update();
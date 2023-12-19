// Original Code from: https://editor.p5js.org/natureofcode/sketches/LSXJ6-VziJ
// Daniel Shiffman
// The Nature of Code
// Example 2-7: Attraction with Many Movers

//Original Code from: https://spctrm404.github.io/IMD232/src/w4/attractionManyMovers/index.html
//OO-SUNG SON (spctrm404)

//Modified by Myeong gyu min

let movers = [];
let movers2 = [];
let attractor;
let showVector = false;
let img;
let img2;

let G = 1;

function preload() {
  img = loadImage('1.png');
  img2 = loadImage('2.png');
}

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  for (let i = 0; i < 400; i++) {
    movers[i] = new Mover(random(0, 100), 300, random(0.6, 2));
  }
  for (let i = 0; i < 400; i++) {
    movers2[i] = new Mover2(random(0, 100), 300, random(0.1, 1));
  }
  attractor = new Attractor();
}

function draw() {
  background(0);

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
  }
  for (let i = 0; i < movers2.length; i++) {
    let force = attractor.attract(movers[i]);
    movers2[i].applyForce(force);
    movers2[i].update();
    movers2[i].display();
  }

  attractor.display();
}

function mouseMoved() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  if (!isMouseInsideCanvas()) return;
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  if (!isMouseInsideCanvas()) return;
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  if (!isMouseInsideCanvas()) return;
  attractor.stopDragging();
}

function mouseIsPressed() {
  movers[i].mouseIsPressed();
}

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

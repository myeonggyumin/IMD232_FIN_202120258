let movers = [];
let movers2 = [];
let attractor;
let showVector = false;

let G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  for (let i = 0; i < 400; i++) {
    movers[i] = new Mover(random(0, 100), random(0, 20), random(0.1, 2));
  }
  for (let i = 0; i < 400; i++) {
    movers2[i] = new Mover2(random(0, 100), random(0, 20), random(0.1, 1));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
    if (showVector) {
      movers[i].displayVectors();
    }
  }
  for (let i = 0; i < movers2.length; i++) {
    let force = attractor.attract(movers[i]);
    movers2[i].applyForce(force);
    movers2[i].update();
    movers2[i].display();
    if (showVector) {
      movers2[i].displayVectors();
    }
  }

  attractor.display();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

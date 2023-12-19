// Original Code from: https://editor.p5js.org/natureofcode/sketches/egribz8WV
// Daniel Shiffman
// The Nature of Code
// Example 5-4: Flow Field Following

//Original Code from: https://spctrm404.github.io/IMD232/src/w7/flowFieldFollowing/index.html
//OO-SUNG SON (spctrm404)

//Modified by Myeong gyu min

let debug = true;
let flowfield;
let vehicles = [];
let vehicles2 = [];
let lastChangeTime = 0;
let app;
let img;

function preload() {
  img = loadImage('1.png');
}

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  flowfield = new FlowField(20, 0.1);
  for (let i = 0; i < 60; i++) {
    vehicles2.push(
      new Vehicle2(
        random(width),
        random(height),
        1,
        4,
        random(2, 5),
        random(0.1, 0.5)
      )
    );
  }

  for (let i = 0; i < 7000; i++) {
    vehicles.push(
      new Vehicle(
        random(width),
        random(height),
        1,
        4,
        random(2, 5),
        random(0.1, 0.5)
      )
    );
  }
}

function draw() {
  background('#E3BA94');

  vehicles2.forEach((each) => {
    each.follow(flowfield);
    each.update();
    each.borderInfinite();
    each.display();
  });

  vehicles.forEach((each) => {
    each.follow(flowfield);
    each.update();
    each.borderInfinite();
    each.display();
  });

  if (millis() - lastChangeTime > 5000) {
    flowfield.init();
    lastChangeTime = millis();
  }
}

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}

function mousePressed() {
  flowfield.init();
}

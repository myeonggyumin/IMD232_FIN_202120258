// Original Code from: https://editor.p5js.org/natureofcode/sketches/LSXJ6-VziJ
// Daniel Shiffman
// The Nature of Code
// Example 2-7: Attraction with Many Movers

//Original Code from: https://spctrm404.github.io/IMD232/src/w4/attractionManyMovers/index.html
//OO-SUNG SON (spctrm404)

//Modified by Myeong gyu min

class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass ** (1 / 2) * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(1, 0);
    this.acceleration = createVector(0, 0);
    this.velocityVisualization = createVector(0, 0);
    this.accelerationVisualization = createVector(0, 0);
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acceleration.add(forceDividedByMass);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    noStroke();
    fill(150, 100);
    circle(this.position.x, this.position.y, this.radius * 2);
  }

  mouseIsPressed() {
    let mouseDirection = createVector(
      mouseX - this.position.x,
      mouseY - this.position.y
    );
    mouseDirection.setMag(10);
    this.velocity.add(mouseDirection);
    this.acceleration.add(mouseDirection);
  }
}

class Mover2 {
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

    this.velocityVisualization.set(this.velocity);
    this.velocityVisualization.mult(10);

    this.acceleration.mult(0);
  }

  display() {
    imageMode(CENTER);
    image(img2, this.position.x, this.position.y);
  }
}

// Original Code from: https://editor.p5js.org/natureofcode/sketches/LSXJ6-VziJ
// Daniel Shiffman
// The Nature of Code
// Example 2-7: Attraction with Many Movers

//Original Code from: https://spctrm404.github.io/IMD232/src/w4/attractionManyMovers/index.html
//OO-SUNG SON (spctrm404)

//Modified by Myeong gyu min

class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.radius = 90;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.hover = false;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    let strength = (G * this.mass * mover.mass) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  display() {
    imageMode(CENTER);
    image(img, this.position.x, this.position.y);
    if (this.dragging) {
      tint(100, 200);
    } else if (this.hover) {
      tint(230, 230);
    } else {
      tint(255, 255);
    }
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.radius) {
      this.hover = true;
    } else {
      this.hover = false;
    }
  }

  handlePress(mx, my) {
    if (!this.hover) return;
    this.dragging = true;
    this.dragOffset.x = this.position.x - mx;
    this.dragOffset.y = this.position.y - my;
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }
  }
}

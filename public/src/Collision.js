function Collision(bodies) {
  this.bodies = bodies;
}

Collision.prototype = {
  isColliding() {
    return false;
  }
};

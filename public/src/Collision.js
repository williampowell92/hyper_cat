function Collision(bodies) {
  this.player = bodies[0];
  this.otherBodies = bodies.slice(1, bodies.length);
}

Collision.prototype = {
  isCollidingOnTop(body1, body2) {
    return !(
      body1.center.x + body1.size.x / 2 <= body2.center.x - body2.size.x / 2
      || body1.center.x - body1.size.x / 2 >= body2.center.x + body2.size.x / 2
      || body1.center.y + body1.size.y / 2 <= body2.center.y - body2.size.y / 2
      || body1.center.y - body1.size.y / 2 >= body2.center.y - body2.size.y / 2
    );
  },

  resolveCollisions() {
    this.player.resolveTopCollision(this.otherBodies[0].center.y - this.otherBodies[0].size.y / 2);
  }
};

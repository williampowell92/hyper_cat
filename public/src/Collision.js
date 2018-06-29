function Collision(bodies) {
  this.player = bodies[0];
  this.otherBodies = bodies.slice(1);
}

Collision.prototype = {
  isCollidingOnTop(player, body) {
    return !(
      this._rightOf(player) <= this._leftOf(body)
      || this._leftOf(player) >= this._rightOf(body)
      || this._bottomOf(player) <= this._topOf(body)
      || this._topOf(player) >= this._topOf(body)
    );
  },

  isCollidingOnBottom(player, body) {
    return !(
      this._topOf(player) >= this._bottomOf(body)
    )
  },

  resolveCollisions() {
    this.otherBodies.forEach((body) => {
      if (this.isCollidingOnTop(this.player, body)) {
        this.player.resolveTopCollision(this._topOf(body));
      }
    });
  },

  _topOf(object) {
    return object.center.y - object.size.y / 2;
  },

  _bottomOf(object) {
    return object.center.y + object.size.y / 2;
  },

  _leftOf(object) {
    return object.center.x - object.size.x / 2;
  },

  _rightOf(object) {
    return object.center.x + object.size.x / 2;
  }
};

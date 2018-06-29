function Player(keyboarder = new Keyboarder()) {
  this.center = { x: 20, y: 780 };
  this.size = { x: 20, y: 55 };
  this.movement = { x: 1.5, y: -25 };
  this.velocity = { x: 0, y: 0 };
  this.keyboarder = keyboarder;
  this.jumping = false;
  this.friction = 0.9;
  this.gravity = 1.5;
}

Player.prototype = {
  update() {
    this._setXVelocity();
    this._jump();
    this._movePlayer();
  },

  draw(context) {
    context.fillRect(
      this.center.x - (this.size.x / 2),
      this.center.y - (this.size.y / 2),
      this.size.x,
      this.size.y
    );
  },

  resolveTopCollision(yCoordinate) {
    this.center.y = yCoordinate - this.size.y / 2;
    this.jumping = false;
  },

  _setXVelocity() {
    if (this.keyboarder.isRightKeyDown()) {
      this.velocity.x += this.movement.x;
    } else if (this.keyboarder.isLeftKeyDown()) {
      this.velocity.x -= this.movement.x;
    } else {
      this.velocity.x = 0;
    }

    this.velocity.x *= this.friction;
  },

  _jump() {
    if (this.keyboarder.isUpKeyDown() && this.jumping === false) {
      this.velocity.y += this.movement.y;
      this.jumping = true;
    } else {
      this.velocity.y = 0;
    }

    this.velocity.y *= this.friction;
    this.velocity.y += this.gravity;
  },

  _movePlayer() {
    this.center.y += this.velocity.y;
    this.center.x += this.velocity.x;
  }

};

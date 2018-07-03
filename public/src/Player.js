function Player(keyboarder = new Keyboarder(), animationFactory = new AnimationFactory) {
  this.center = { x: 400, y: 700 };
  this.size = { x: 45, y: 72 };
  this.acceleration = { x: 1.5, y: -25 };
  this.velocity = { x: 0, y: 0 };
  this.keyboarder = keyboarder;
  this.jumping = true;
  this.friction = 0.9;
  this.gravity = 1.5;
  this.animations = {};
  this.animations.idle = animationFactory.build('idle');
  this.currentAnimation = this.animations.idle;
}

Player.prototype = {
  update(gameSize) {
    this._setXVelocity();
    this._setYVelocity();
    this._movePlayer();
    this._checkYPosition(gameSize);
  },

  draw(context, offset, gameSize) {
    this.currentAnimation.draw(context, gameSize, this.center, this.size);
    this.currentAnimation.repositionFrame();
  },

  resolveTopCollision(yCoordinate) {
    this.center.y = yCoordinate - this.size.y / 2;
    this.jumping = false;
    this.velocity.y = 0;
  },

  resolveBottomCollision(yCoordinate) {
    this.center.y = yCoordinate + this.size.y / 2;
    this.velocity.y = 0;
  },

  resolveLeftCollision(xCoordinate) {
    this.center.x = xCoordinate - this.size.x / 2;
    this.velocity.x = 0;
  },

  resolveRightCollision(xCoordinate) {
    this.center.x = xCoordinate + this.size.x / 2;
    this.velocity.x = 0;
  },

  _setXVelocity() {
    if (this.keyboarder.isRightKeyDown()) {
      this.velocity.x += this.acceleration.x;
    } else if (this.keyboarder.isLeftKeyDown()) {
      this.velocity.x -= this.acceleration.x;
    }

    this.velocity.x *= this.friction;
  },

  _jump() {
    if (this.keyboarder.isUpKeyDown() && this.jumping === false) {
      this.velocity.y = this.acceleration.y;
    }
    this.jumping = true;
  },

  _addGravity() {
    this.velocity.y += this.gravity;
  },

  _setYVelocity() {
    this._addGravity();
    this._jump();
  },

  _movePlayer() {
    this.center.y += this.velocity.y;
    this.center.x += this.velocity.x;
  },

  _checkYPosition(gameSize) {
    if (this.center.y > gameSize.y) {
      this._loseScreen();
    }
  },

  _loseScreen() {
    window.location.replace('/lose');
  }
};

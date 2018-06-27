function Player(keyboarder = new Keyboarder()) {
  this.center = { x: 20, y: 0 };
  this.size = { x: 20, y: 55 };
  this.speed = { x: 1.5, y: -25 };
  this.velocity = { x: 0, y: 0 };
  this.keyboarder = keyboarder;
}

Player.prototype = {
  update() {
    this._moveX();
    this._moveY();
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

  _moveX() {
    if (this.keyboarder.isRightKeyDown()) {
      this.velocity.x = this.speed.x;
    } else if (this.keyboarder.isLeftKeyDown()) {
      this.velocity.x = -this.speed.x;
    } else { this.velocity.x = 0; }
  },

  _moveY() {
    if (this.keyboarder.isUpKeyDown()) {
      this.velocity.y = this.speed.y;
    } else { this.velocity.y = 0; }
  },

  _movePlayer() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;
  }
};

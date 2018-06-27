function Player(keyboarder = new Keyboarder()) {
  this.center = { x: 20, y: 0 };
  this.size = { x: 20, y: 55 };
  this.velocity = { x: 0, y: 0 };
  this.movement = { x: 1.5, y: -25 };
  this.keyboarder = keyboarder;
}

Player.prototype = {
  update() {
    if (this.keyboarder.isRightKeyDown()) {
      this.velocity.x += this.movement.x;
    } else if (this.keyboarder.isLeftKeyDown()) {
      this.velocity.x -= this.movement.x;
    }

    if (this.keyboarder.isUpKeyDown()) {
      this.velocity.y = this.movement.y;
    }

    this.center.x += this.velocity.x;

  },

  draw(context) {
    context.fillRect(
      this.center.x - (this.size.x / 2),
      this.center.y - (this.size.y / 2),
      this.size.x,
      this.size.y
    );
  }
};

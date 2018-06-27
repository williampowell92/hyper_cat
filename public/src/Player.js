function Player() {
  this.center = { x: 20, y: 0 };
  this.size = { x: 20, y: 55 };
}

Player.prototype = {
  draw(context) {
    context.fillRect(
      this.center.x - (this.size.x / 2),
      this.center.y - (this.size.y / 2),
      this.size.x,
      this.size.y
    );
  }
};

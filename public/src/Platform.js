function Platform(center, size) {
  this.center = center;
  this.size = size;
}

Platform.prototype = {
  update() {

  },

  draw(context, playerOffset) {
    context.fillRect(
      this.center.x - this.size.x / 2 - playerOffset,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  },

  resolveCollision() {

  }
};

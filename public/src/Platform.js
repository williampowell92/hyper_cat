function Platform(center, size) {
  this.center = center;
  this.size = size;
}

Platform.prototype = {
  update() {

  },

  draw(context) {
    context.fillRect(
      this.center.x - this.size.x / 2,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }
};

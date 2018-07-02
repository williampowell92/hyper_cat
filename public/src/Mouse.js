function Mouse() {
  this.center = { x: 600, y: 375 };
  this.size = { x: 20, y: 20 };
  this.image = new Image();
  this.image.src = '';
}

Mouse.prototype = {
  update() {

  },

  draw(context, playerOffset) {
    context.fillRect(
      this.center.x - this.size.x / 2 - playerOffset,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }
};

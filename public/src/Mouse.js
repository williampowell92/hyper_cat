function Mouse() {
  this.center = { x: 1200, y: 360 };
  this.size = { x: 50, y: 50 };
  this.image = new Image();
  this.image.src = 'public/assets/imgs/Mouse.png';
}

Mouse.prototype = {
  update() {

  },

  draw(context, playerOffset) {
    context.drawImage(
      this.image,
      this.center.x - this.size.x / 2 - playerOffset,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  },

  resolveCollision() {
    this._winScreen();
  },

  _winScreen() {
    window.location.replace('/win');
  }
};

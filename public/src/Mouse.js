function Mouse() {
  this.center = { x: 1200, y: 375 };
  this.size = { x: 20, y: 20 };
  this.image = new Image();
  this.image.src = 'https://vignette.wikia.nocookie.net/transformice/images/5/5c/Mouse.png/revision/latest?cb=20130807162505';
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

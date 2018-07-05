function Mouse(imageFactory = new ImageFactory()) {
  this.center = { x: 1200, y: 360 };
  this.size = { x: 50, y: 50 };
  this.image = imageFactory.build();
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
    this._winClosure();
  },

  _redirectToWinPage() {
    window.location.replace('/win');
  },

  _winClosure: (function _winClosure() {
    let executed = false;
    return function redirect() {
      if (!executed) {
        executed = true;
        this._redirectToWinPage();
      }
    };
  }()),
};

function ImageFactory() {
  return {
    build: () => new Image()
  };
}

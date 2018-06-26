const Game = function () {
  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  let gameSize = { x: canvas.width, y: canvas.height };

  this.bodies = [];
  this.gravity = 1.5;

  let self = this;
};

Game.prototype = {

  update(gameSize) {
    this.bodies.forEach((body) => {
      body.update(gameSize);
    });
  },

  draw(ctx, gameSize) {
    ctx.clearRect(0, 0, gameSize.x, gameSize.y);
    this.bodies.forEach((body) => {
      body.draw(ctx);
    })
  }
};

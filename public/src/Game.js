const Game = function Game (gameSize) {
  this.bodies = [];
  this.gravity = 1.5;
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
    });
  },
};

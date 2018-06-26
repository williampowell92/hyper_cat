const Game = function () {

  this.bodies = [];
  this.gravity = 1.5;
};

Game.prototype = {
  draw(ctx, gameSize) {
    ctx.clearRect(0, 0, gameSize.x, gameSize.y);
  }
};

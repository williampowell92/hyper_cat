const Game = function Game (gameSize) {
  this.bodies = [];
};

Game.prototype = {

  update(gameSize) {
    this.bodies.forEach((body) => {
      body.update(gameSize);
    });
  },

  draw(context, gameSize) {
    context.clearRect(0, 0, gameSize.x, gameSize.y);
    this.bodies.forEach((body) => {
      body.draw(context);
    });
  },
};

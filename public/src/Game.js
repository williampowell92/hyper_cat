const Game = function Game() {
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

function GameFactory() {
  return {
    build: () => new Game()
  };
}

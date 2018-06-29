function Game(player, platforms, collisionFactory) {
  this.bodies = [player].concat(platforms);
  this.collision = collisionFactory.build(this.bodies);
}

Game.prototype = {
  update(gameSize) {
    this.bodies.forEach((body) => {
      body.update(gameSize);
    });
    this.collision.resolveCollisions();
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
    build: (
      player = new Player(),
      platforms = [],
      collisionFactory = new CollisionFactory()
    ) => new Game(player, platforms, collisionFactory)
  };
}

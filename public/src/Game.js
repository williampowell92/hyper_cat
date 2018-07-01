function Game(player, platforms, collisionFactory) {
  this.bodies = [player].concat(platforms);
  this.collision = collisionFactory.build(this.bodies);
  this.playerXOrigin = player.center.x;
}

Game.prototype = {
  update(gameSize) {
    this.bodies.forEach((body) => {
      body.update(gameSize);
    });
    this.collision.resolveCollisions();
  },

  draw(context, gameSize) {
    const playerOffset = this.bodies[0].center.x - this.playerXOrigin;
    context.clearRect(0, 0, gameSize.x, gameSize.y);
    this.bodies.forEach((body) => {
      body.draw(context, playerOffset, gameSize);
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

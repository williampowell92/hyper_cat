function Index(gameFactory = new GameFactory(), documentObject = document) {
  const canvas = documentObject.querySelector('canvas');
  const context = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = gameFactory.build(
    undefined,
    [
      new Platform({ x: canvas.width / 2, y: canvas.height - 10 }, { x: canvas.width, y: 20 }),
      new Platform({ x: canvas.width / 2, y: 600 }, { x: 200, y: 20 })
    ]
  );

  const self = this;
  const tick = function tick() {
    self.game.update(gameSize);
    self.game.draw(context, gameSize);
    requestAnimationFrame(tick);
  };

  tick();
}

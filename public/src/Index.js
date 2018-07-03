function Index(gameFactory = new GameFactory(), documentObject = document) {
  const canvas = documentObject.querySelector('canvas');
  const context = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = gameFactory.build(
    undefined,
    undefined,
    [
      new Platform({ x: canvas.width / 2, y: canvas.height - 10 }, { x: 100, y: 30 }),
      new Platform({ x: canvas.width / 4, y: canvas.height - 10 }, { x: 150, y: 30 }),
      new Platform({ x: canvas.width / 2, y: 625 }, { x: 100, y: 75 }),
      new Platform({ x: canvas.width / 4, y: 400 }, { x: 200, y: 30 }),
      new Platform({ x: canvas.width , y: 400 }, { x: 100, y: 30 })
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

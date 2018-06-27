function Index(GameClass = Game, documentObject = document) {
  const canvas = documentObject.querySelector('canvas');
  const context = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = new GameClass(context, gameSize);

  const self = this;
  const tick = function tick() {
    self.game.update(gameSize);
  };

  tick();
}

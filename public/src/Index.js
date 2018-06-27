function Index(GameClass = Game, documentObject = document) {
  console.log(documentObject);
  const canvas = documentObject.querySelector('canvas');
  console.log(canvas);
  console.log(canvas.width);
  console.log(canvas.height);
  const screen = canvas.getContext('2d');
  console.log(screen);
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = new GameClass('context', gameSize);

  const self = this;
  const tick = function tick() {
    self.game.update(gameSize);
  };

  tick();
}

function Index(GameClass = Game) {
  const canvas = document.querySelector('canvas');
  const screen = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = new GameClass('context', gameSize);

  const self = this;
  const tick = function tick() {
    self.game.update(gameSize);
  };

  tick();
}

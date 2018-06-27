function Index(gameClass = Game) {
  const canvas = document.querySelector('canvas');
  const screen = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = new gameClass('context', gameSize);

  const self = this
  const tick = function() {
    self.game.update(gameSize);
  }

  tick();
}

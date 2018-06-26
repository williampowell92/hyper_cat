describe('Game', () => {

  let game, canvas, context, gameSize, player;

  beforeEach(() => {
    game = new Game();
    canvas = { width: 800, height: 800 };
    context = { clearRect () {} }
    gameSize = { x: canvas.width, y: canvas.height };
    player = { draw() {}, update() {} };
  });

  describe('initialize', () => {
    it('has a bodies array', () => {
      expect(game.bodies).toEqual([]);
    });
  });

  describe('Draw', () => {
    beforeEach(() => {
      spyOn(context, 'clearRect');
      spyOn(player, 'draw');
    });

    it('clears the canvas', () => {
      game.draw(context, gameSize);
      expect(context.clearRect).toHaveBeenCalledWith(0, 0, gameSize.x, gameSize.y);
    });

    it('draws all the bodies from array', () => {
      game.bodies = [player];
      game.draw(context, gameSize);
      expect(player.draw).toHaveBeenCalled();
    });
  });

  describe('Update', () => {
    it('update the screen with bodies', () => {
      spyOn(player, 'update');
      game.bodies = [player];
      game.update(gameSize);
      expect(player.update).toHaveBeenCalled();
    });
  });
});

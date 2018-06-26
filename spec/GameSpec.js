describe("Game", () => {

  let game, canvas, ctx, gameSize, player;

  beforeEach(() => {
    game = new Game();
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    gameSize = { x: canvas.width, y: canvas.height };
    player = {
      draw: function() {

      }
    }
  });

  describe("initialize", () => {
      it("has a bodies array", () => {
        expect(game.bodies).toEqual([])
      });

      it("sets a gravity", () => {
        expect(game.gravity).toEqual(1.5)
      })
  });

  describe('Draw', () => {

    beforeEach(() => {
      spyOn(ctx, 'clearRect');
      spyOn(player, 'draw');
    });

      it('clears the canvas', () => {
        game.draw(ctx, gameSize);
        expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, gameSize.x, gameSize.y);
      });

      it('draws all the bodies from array', () => {
        game.bodies = [player]
        game.draw(ctx, gameSize);
        expect(player.draw).toHaveBeenCalled();
      })
    });
});

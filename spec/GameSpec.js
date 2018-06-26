describe("Game", () => {

  var canvas, ctx, gameSize;

  beforeEach(() => {
    game = new Game();
    canvas = document.getElementById(canvas);
    ctx = canvas.getContext('2d');
    gameSize = { x: canvas.width, y: canvas.height };
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
      it('draws canvas to screen', () => {
        var spyCtx = spyOn(ctx, 'clearRect');
        game.draw(spyCtx, gameSize);
        expect(spyCtx.clearRect).toHaveBeenCalledWith(0, 0, gameSize.x, gameSize.y);
      })
    })
});

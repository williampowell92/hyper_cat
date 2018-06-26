describe("Game", () => {

  beforeEach(() => {
    game = new Game();
  });

  describe("initialize", () => {
      it("has a bodies array", () => {
        expect(game.bodies).toEqual([])
      });

      it("sets a gravity", () => {
        expect(game.gravity).toEqual(1.5)
      })
  });
});

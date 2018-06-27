describe('Index', () => {

  let game, index;

  function MockGame() {
    this.updateCalled = 0;
  }

  MockGame.prototype = {
    update() {
      this.updateCalled += 1;
    }
  }

  beforeEach(() => {
    index = new Index(MockGame);
  });

  describe("tick", () => {
    it('is called when an instance of index is created', () => {
      expect(index.game.updateCalled).toEqual(1);
    })
  })
})

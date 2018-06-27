describe('Index', () => {
  let index;
  let mockDocument;
  let mockCanvas;

  function MockGame() {
    this.updateCalled = 0;
    this.drawCalled = 0;
  }

  MockGame.prototype = {
    update() {
      this.updateCalled += 1;
    },

    draw() {
      this.drawCalled += 1;
    }
  };

  beforeEach(() => {
    mockCanvas = {
      getContext() {},

      width: 800,

      height: 800
    };

    mockDocument = {
      querySelector() {}
    };

    spyOn(mockCanvas, 'getContext').and.returnValue('Im a screen');
    spyOn(mockDocument, 'querySelector').and.returnValue(mockCanvas);

    index = new Index(MockGame, mockDocument);
  });

  describe('tick', () => {
    it('calls game.update when an instance of index is created', () => {
      expect(index.game.updateCalled).toEqual(1);
    });

    it('calls game.draw when an instance of index is created', () => {
      expect(index.game.drawCalled).toEqual(1);
    });
  });
});

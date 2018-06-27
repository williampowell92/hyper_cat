describe('Index', () => {
  let index;
  let mockDocument;
  let mockCanvas;
  let gameSize;

  function MockGame() {
    this.updateCalled = 0;
    this.updateArgs = [];
    this.drawCalled = 0;
  }

  MockGame.prototype = {
    update(...args) {
      this.updateCalled += 1;
      this.updateArgs = args;
    },

    draw() {
      this.drawCalled += 1;
    }
  };

  beforeEach(() => {
    mockCanvas = {
      getContext() {}, width: 800, height: 800
    };

    mockDocument = {
      querySelector() {}
    };

    spyOn(mockCanvas, 'getContext').and.returnValue('Im a screen');
    spyOn(mockDocument, 'querySelector').and.returnValue(mockCanvas);

    gameSize = { x: mockCanvas.width, y: mockCanvas.height };

    index = new Index(MockGame, mockDocument);
  });

  describe('tick', () => {
    it('calls game.update when an instance of index is created', () => {
      expect(index.game.updateCalled).toEqual(1);
    });

    it('calls game.update with gameSize as an argument', () => {
      expect(index.game.updateArgs).toEqual([gameSize]);
    });
  });
});

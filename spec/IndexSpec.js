describe('Index', () => {
  let index;
  let mockDocument;
  let mockCanvas;
  let gameSize;
  let mockContext;

  function MockGame() {
    this.updateCalled = 0;
    this.drawCalled = 0;
  }

  MockGame.prototype = {
    update(...args) {
      this.updateCalled += 1;
      this.updateArgs = args;
    },

    draw(...args) {
      this.drawCalled += 1;
      this.drawArgs = args;
    }
  };

  beforeEach(() => {
    mockCanvas = {
      getContext() {}, width: 800, height: 800
    };

    mockDocument = {
      querySelector() {}
    };

    mockContext = {};

    spyOn(mockCanvas, 'getContext').and.returnValue(mockContext);
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

    it('calls game.draw when an instance of index is created', () => {
      expect(index.game.drawCalled).toEqual(1);
    });

    it('calls game.draw with screen and gameSize as the arguments', () => {
      expect(index.game.drawArgs).toEqual([mockContext, gameSize]);
    });
  });
});

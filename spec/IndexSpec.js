describe('Index', () => {
  let index;
  let mockDocument;
  let mockCanvas;
  let gameSize;
  let mockContext;

  // function MockGame() {
  //   this.updateCalled = 0;
  //   this.drawCalled = 0;
  // }
  //
  // MockGame.prototype = {
  //   update(...args) {
  //     this.updateCalled += 1;
  //     this.updateArgs = args;
  //   },
  //
  //   draw(...args) {
  //     this.drawCalled += 1;
  //     this.drawArgs = args;
  //   }
  // };

  beforeEach(() => {
    gameFactory = new GameFactory();

    mockCanvas = {
      getContext() {}, width: 800, height: 800
    };

    mockDocument = {
      querySelector() {}
    };

    mockContext = {};
    mockGame = jasmine.createSpyObj('game', ['update', 'draw']);

    spyOn(gameFactory, 'build').and.returnValue(mockGame);
    spyOn(mockCanvas, 'getContext').and.returnValue(mockContext);
    spyOn(mockDocument, 'querySelector').and.returnValue(mockCanvas);

    gameSize = { x: mockCanvas.width, y: mockCanvas.height };
    spyOn(window, 'requestAnimationFrame');

    index = new Index(gameFactory, mockDocument);
  });

  describe('tick', () => {
    it('calls game.update when an instance of index is created', () => {
      expect(mockGame.update).toHaveBeenCalledWith(gameSize);
    });

    it('calls game.draw when an instance of index is created', () => {
      expect(mockGame.draw).toHaveBeenCalledWith(mockContext, gameSize);
    });

    it('calls requestAnimationFrame on window', () => {
      expect(window.requestAnimationFrame).toHaveBeenCalled();
    });
  });
});

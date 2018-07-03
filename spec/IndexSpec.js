describe('Index', () => {
  let platformFactory;
  let gameFactory;
  let mockCanvas;
  let mockDocument;
  let mockContext;
  let mockPlatform;
  let mockGame;
  let gameSize;
  let index;

  beforeEach(() => {
    platformFactory = new PlatformFactory();
    gameFactory = new GameFactory();

    mockCanvas = {
      getContext() {}, width: 800, height: 800
    };

    mockDocument = {
      querySelector() {}
    };

    mockContext = {};
    mockPlatform = jasmine.createSpyObj('platform', ['draw']);
    mockGame = jasmine.createSpyObj('game', ['update', 'draw']);

    spyOn(platformFactory, 'build').and.returnValue(mockPlatform);
    spyOn(gameFactory, 'build').and.returnValue(mockGame);
    spyOn(mockCanvas, 'getContext').and.returnValue(mockContext);
    spyOn(mockDocument, 'querySelector').and.returnValue(mockCanvas);
    spyOn(window, 'requestAnimationFrame');

    gameSize = { x: mockCanvas.width, y: mockCanvas.height };

    index = new Index(gameFactory, platformFactory, mockDocument);
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

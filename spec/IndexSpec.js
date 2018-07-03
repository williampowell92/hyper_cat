describe('Index', () => {
  let gameFactory;
  let soundFactory;
  let mockCanvas;
  let mockDocument;
  let mockContext;
  let mockGame;
  let mockSound;
  let gameSize;
  let index;

  beforeEach(() => {
    gameFactory = new GameFactory();
    soundFactory = new SoundFactory();
    mockCanvas = {
      getContext() {}, width: 800, height: 800
    };
    mockDocument = {
      querySelector() {}
    };
    mockContext = {};
    mockGame = jasmine.createSpyObj('game', ['update', 'draw']);
    mockSound = jasmine.createSpyObj('sound', ['play']);
    spyOn(gameFactory, 'build').and.returnValue(mockGame);
    spyOn(soundFactory, 'build').and.returnValue(mockSound);
    spyOn(mockCanvas, 'getContext').and.returnValue(mockContext);
    spyOn(mockDocument, 'querySelector').and.returnValue(mockCanvas);
    spyOn(window, 'requestAnimationFrame');
    gameSize = { x: mockCanvas.width, y: mockCanvas.height };
    index = new Index(gameFactory, mockDocument, soundFactory);
  });

  describe('initialize', () => {
    it('creates music with the correct src', () => {
      const src = 'public/assets/sounds/background_music.mp3';
      expect(soundFactory.build).toHaveBeenCalledWith(src);
    });
  })

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

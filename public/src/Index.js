function Index(gameFactory = new GameFactory(), platformFactory = new PlatformFactory(), documentObject = document, soundFactory = new SoundFactory()) {
  const canvas = documentObject.querySelector('canvas');
  const context = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  const backgroundMusic = soundFactory.build('public/assets/sounds/background_music.mp3', true);
  backgroundMusic.play();
  this.game = gameFactory.build(
    undefined,
    undefined,
    [
      platformFactory.build({ x: canvas.width / 2, y: canvas.height - 10 },
        { x: 400, y: 50 }),
      platformFactory.build({ x: 1200, y: 600 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 1400, y: 400 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 1600, y: 200 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 1800, y: 800 }, { x: 128, y: 70 }),

      
    ]
  );

  const self = this;
  const tick = function tick() {
    self.game.update(gameSize);
    self.game.draw(context, gameSize);
    requestAnimationFrame(tick);
  };

  tick();
}

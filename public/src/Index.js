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

      platformFactory.build({ x: 2000, y: 300 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 2400, y: 400 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 2600, y: 800 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 3100, y: 200 }, { x: 356, y: 70 }),
      platformFactory.build({ x: 2900, y: 700 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 3300, y: 600 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 3600, y: 500 }, { x: 128, y: 70 }),

      platformFactory.build({ x: 3900, y: 800 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4028, y: 755 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4156, y: 710 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4284, y: 665 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4412, y: 620 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4540, y: 575 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4668, y: 530 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4796, y: 485 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 4924, y: 440 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 5052, y: 485 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 5180, y: 530 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 5308, y: 575 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 5436, y: 620 }, { x: 128, y: 70 }),
      platformFactory.build({ x: 5564, y: 665 }, { x: 128, y: 70 }),

      
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

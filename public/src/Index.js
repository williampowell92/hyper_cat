function Index(gameFactory = new GameFactory(), documentObject = document) {
  const canvas = documentObject.querySelector('canvas');
  const context = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = gameFactory.build(
    undefined,
    undefined,
    [
      // starting platform
      new Platform({ x: 800 - 128, y: 790 }, { x: 128, y: 128 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      new Platform({ x: 800, y: 790 }, { x: 128, y: 128 }, undefined, 'public/assets/imgs/platform_mid.png'),
      new Platform({ x: 800 + 128, y: 790 }, { x: 128, y: 128 }, undefined, 'public/assets/imgs/platform_right_end.png'),

      // 1st right platform
      new Platform({ x: 400, y: 550 }, { x: 128, y: 90 }, undefined, 'public/assets/imgs/platform_mid.png'),


      // new Platform({ x: canvas.width / 4 + 128, y: 400 }, { x: 128, y: 64 }, undefined, 'public/assets/imgs/platform_right_end.png'),
      //
      // new Platform({ x: canvas.width * 3 / 4 -128, y: 400 }, { x: 200, y: 64 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      // new Platform({ x: canvas.width * 3 / 4, y: 400 }, { x: 200, y: 64 }, undefined, 'public/assets/imgs/platform_right_end.png')
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

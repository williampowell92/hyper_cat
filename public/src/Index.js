function Index(gameFactory = new GameFactory(), documentObject = document) {
  const canvas = documentObject.querySelector('canvas');
  const context = canvas.getContext('2d');
  const gameSize = { x: canvas.width, y: canvas.height };
  this.game = gameFactory.build(
    undefined,
    undefined,
    [

      // meeting plaform
      new Platform({ x: 800, y: 790 }, { x: 1600, y: -10 }, undefined, 'public/assets/imgs/platform_left_end.png'),

      // starting platform
      new Platform({ x: 800 - 128, y: 790 }, { x: 128, y: 128 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      new Platform({ x: 800, y: 790 }, { x: 128, y: 128 }, undefined, 'public/assets/imgs/platform_mid.png'),
      new Platform({ x: 800 + 128, y: 790 }, { x: 128, y: 128 }, undefined, 'public/assets/imgs/platform_right_end.png'),
      new Platform({ x: 750 + 128, y: 690 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/ArrowSign.png'),


      // 1st platform in route
      new Platform({ x: 400 - 70, y: 550 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      new Platform({ x: 400, y: 550 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/platform_right_end.png'),

      // 2nd plaftorm in route
      new Platform({ x: 700  - 70, y: 350 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      new Platform({ x: 700, y: 350 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/platform_right_end.png'),


      // 1st unjumpable platform - medium
      new Platform({ x: 1330, y: 512 }, { x: 128, y: 90 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      new Platform({ x: 1330 + 128, y: 512 }, { x: 128, y: 90 }, undefined, 'public/assets/imgs/platform_right_end.png'),

      // 3rd platform in route
      new Platform({ x: 950 - 70, y: 200 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/platform_left_end.png'),
      new Platform({ x: 950, y: 200 }, { x: 70, y: 70 }, undefined, 'public/assets/imgs/platform_right_end.png')

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

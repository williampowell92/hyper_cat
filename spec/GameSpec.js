describe('Game', () => {
  let canvas;
  let context;
  let game;
  let gameFactory;
  let collision;
  let collisionFactory;
  let gameSize;
  let mouse;
  let platform;
  let platforms;
  let player;

  beforeEach(() => {
    canvas = { width: 800, height: 800 };
    context = { clearRect() {} };
    gameSize = { x: canvas.width, y: canvas.height };
    mouse = { draw() {}, update() {} };
    player = { draw() {}, update() {}, center: { x: canvas.width / 2, y: 700 } };
    platform = { draw() {}, update() {} };
    platforms = [platform];
    collisionFactory = new CollisionFactory();
    collision = jasmine.createSpyObj('collision', ['resolveCollisions']);
    spyOn(collisionFactory, 'build').and.returnValue(collision);
    gameFactory = new GameFactory();
    game = gameFactory.build(player, mouse, platforms, collisionFactory);
  });

  describe('initialize', () => {
    it('creates a bodies array containing player', () => {
      expect(game.bodies).toContain(player);
    });

    it('creates a bodies array containing mouse', () => {
      expect(game.bodies).toContain(mouse);
    });

    it('creates a bodies array containing platform', () => {
      expect(game.bodies).toContain(platform);
    });
  });

  describe('Draw', () => {
    beforeEach(() => {
      spyOn(context, 'clearRect');
      spyOn(player, 'draw');
    });

    it('clears the canvas', () => {
      game.draw(context, gameSize);
      expect(context.clearRect).toHaveBeenCalledWith(0, 0, gameSize.x, gameSize.y);
    });

    it('calls draw on bodies with the correct arguments', () => {
      const playerOffset = 200;
      game.bodies[0].center.x += playerOffset;
      game.draw(context, gameSize);
      expect(player.draw).toHaveBeenCalledWith(context, playerOffset, gameSize);
    });

    it('calls draw on bodies with a different playerOffset', () => {
      const playerOffset = 400;
      game.bodies[0].center.x += playerOffset;
      game.draw(context, gameSize);
      expect(player.draw).toHaveBeenCalledWith(context, playerOffset, gameSize);
    });
  });

  describe('Update', () => {
    it('update the screen with bodies', () => {
      spyOn(player, 'update');
      game.bodies = [player];
      game.update(gameSize);
      expect(player.update).toHaveBeenCalled();
    });

    it('calls resolveCollisions', () => {
      game.update(gameSize);
      expect(collision.resolveCollisions).toHaveBeenCalled();
    });
  });
});

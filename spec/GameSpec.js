describe('Game', () => {
  let canvas;
  let context;
  let game;
  let gameFactory;
  let collision;
  let collisionFactory;
  let gameSize;
  let platform;
  let platforms;
  let player;

  beforeEach(() => {
    canvas = { width: 800, height: 800 };
    context = { clearRect() {} };
    gameSize = { x: canvas.width, y: canvas.height };
    player = { draw() {}, update() {}, center: { x: canvas.width / 2, y: 700 } };
    platform = { draw() {}, update() {} };
    platforms = [platform];
    collisionFactory = new CollisionFactory();
    collision = jasmine.createSpyObj('collision', ['resolveCollisions']);
    spyOn(collisionFactory, 'build').and.returnValue(collision);
    gameFactory = new GameFactory();
    game = gameFactory.build(player, platforms, collisionFactory);
  });

  describe('initialize', () => {
    it('creates a bodies array containing player', () => {
      expect(game.bodies).toContain(player);
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
      const offset = 200;
      game.bodies[0].center.x += offset;
      game.draw(context, gameSize);
      expect(player.draw).toHaveBeenCalledWith(context, offset);
    });

    it('calls draw on bodies with a different offset', () => {
      const offset = 400;
      game.bodies[0].center.x += offset;
      game.draw(context, gameSize);
      expect(player.draw).toHaveBeenCalledWith(context, offset);
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

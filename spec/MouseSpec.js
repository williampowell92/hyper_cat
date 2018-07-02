describe('Mouse', () => {
  let mouse;
  let context;
  let handlers;

  beforeEach(() => {
    mouse = new Mouse();
    context = jasmine.createSpyObj('context', ['fillRect']);
    handlers = {
      locationReload: document.location.reload
    };
  });

  describe('update', () => {
    it('has an update function', () => {
      expect(typeof mouse.update).toBe('function');
    });
  });

  describe('draw', () => {
    it('calls function fillRect with correct arguments', () => {
      const playerOffset = 200;
      mouse.draw(context, playerOffset);
      expect(context.fillRect).toHaveBeenCalledWith(
        mouse.center.x - mouse.size.x / 2 - playerOffset,
        mouse.center.y - mouse.size.y / 2,
        mouse.size.x,
        mouse.size.y
      );
    });
  });

  describe('resolveCollision', () => {
    it('calls alert when colliding with player', () => {
      spyOn(window, 'alert');
      mouse.resolveCollision();
      expect(window.alert).toHaveBeenCalledWith('You WIN! but you are still a loser');
    });
  });
});

describe('Mouse', () => {
  let mouse;
  let context;
  let imageFactory;

  beforeEach(() => {
    imageFactory = new ImageFactory();
    spyOn(imageFactory, 'build').and.returnValue({});
    mouse = new Mouse(imageFactory);
    context = jasmine.createSpyObj('context', ['drawImage']);

  });

  describe('update', () => {
    it('has an update function', () => {
      expect(typeof mouse.update).toBe('function');
    });
  });

  describe('draw', () => {
    it('calls function drawImage with correct arguments', () => {
      const playerOffset = 200;
      mouse.draw(context, playerOffset);
      expect(context.drawImage).toHaveBeenCalledWith(
        mouse.image,
        mouse.center.x - mouse.size.x / 2 - playerOffset,
        mouse.center.y - mouse.size.y / 2,
        mouse.size.x,
        mouse.size.y
      );
    });
  });

  describe('resolveCollision', () => {
    it('calls _redirectToWinPage once if the player hits the mouse below screen', () => {
      spyOn(mouse, '_redirectToWinPage');
      mouse.resolveCollision();
      mouse.resolveCollision();
      expect(mouse._redirectToWinPage).toHaveBeenCalledTimes(1);
    });
  });
});

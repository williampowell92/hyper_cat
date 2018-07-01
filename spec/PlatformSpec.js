describe('Platform', () => {
  let platform;
  let context;
  let center;
  let size;

  beforeEach(() => {
    center = { x: 400, y: 400 };
    size = { x: 100, y: 20 };

    platform = new Platform(center, size);

    context = jasmine.createSpyObj('context', ['fillRect']);
  });

  describe('draw', () => {
    it('call function fillRect with correct arguments', () => {
      const playerOffset = 200;
      platform.draw(context, playerOffset);
      expect(context.fillRect).toHaveBeenCalledWith(
        center.x - size.x / 2 - playerOffset,
        center.y - size.y / 2,
        size.x,
        size.y
      );
    });
  });

  describe('update', () => {
    it('has an update function', () => {
      expect(typeof platform.update).toBe('function');
    });
  });
});

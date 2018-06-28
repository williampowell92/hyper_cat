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
    it('calls function fillRect', () => {
      platform.draw(context);
      expect(context.fillRect).toHaveBeenCalled();
    });

    it('call function fillRect with correct arguments', () => {
      platform.draw(context);
      expect(context.fillRect).toHaveBeenCalledWith(
        center.x - size.x / 2,
        center.y - size.y / 2,
        size.x,
        size.y
      );
    });
  });
});

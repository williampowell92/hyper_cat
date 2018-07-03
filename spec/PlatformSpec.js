describe('Platform', () => {
  let platform;
  let context;
  let center;
  let size;
  let imageFactory;
  let platformFactory;

  beforeEach(() => {
    center = { x: 400, y: 400 };
    size = { x: 100, y: 20 };
    imageFactory = new ImageFactory();
    spyOn(imageFactory, 'build').and.returnValue({});
    platformFactory = new PlatformFactory();
    platform = platformFactory.build(center, size)
    context = jasmine.createSpyObj('context', ['drawImage']);
  });

  describe('draw', () => {
    it('call function drawImage with correct arguments', () => {
      const playerOffset = 200;
      platform.draw(context, playerOffset);
      expect(context.drawImage).toHaveBeenCalledWith(
        platform.image,
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

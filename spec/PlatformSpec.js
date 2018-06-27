describe('Platform', () => {
  let platform;
  let context;

  beforeEach(() => {
    platform = new Platform();

    context = jasmine.createSpyObj('context', ['fillRect']);
  });

  describe('draw', () => {
    it('calls function fillRect', () => {
      platform.draw(context);
      expect(context.fillRect).toHaveBeenCalled();
    });
  });
});

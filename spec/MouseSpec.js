describe('Mouse', () => {
  let mouse;
  let context;

  beforeEach(() => {
    mouse = new Mouse();
    context = jasmine.createSpyObj('context', ['fillRect']);
  });

  describe('update', () => {
    it('has an update function', () => {
      expect(typeof mouse.update).toBe('function');
    });
  });
})

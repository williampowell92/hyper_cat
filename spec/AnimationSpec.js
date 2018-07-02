describe('Animation', () => {
  let animation;

  beforeEach(() => {
    animation = new Animation();
  });

  describe('initialize', () => {
    it('starts with current frame of 0', () => {
      expect(animation.currentFrame).toEqual(0);
    });
  });
});

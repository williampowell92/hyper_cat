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

  describe('updateFrame', () => {
    it('should iterate currentFrame from 1 to 9', () => {
      for (let i = 1; i < 10; i++) {
        animation.updateFrame();
        expect(animation.currentFrame).toEqual(i);
      }
    });

    it('reset currentFrame to 0 after 9', () => {
      for (let i = 1; i < 11; i++) {
        animation.updateFrame();
      }
      expect(animation.currentFrame).toEqual(0);
    });
  });

  describe('repositionFrame', () => {
    it('should iterate frameX from 90 to 810', () => {
      for (let i = 1; i < 10; i++) {
        animation.positionFrame();
        expect(animation.frameX).toEqual(i * 90);
      }
    });
  });
});

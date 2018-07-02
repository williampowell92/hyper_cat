describe('Animation', () => {
  let animation;
  let spriteSheetWidth;
  let spriteSheetColumns;

  beforeEach(() => {
    animation = new Animation();
    spriteSheetWidth = 900;
    spriteSheetColumns = 10;
  });

  describe('initialize', () => {
    it('starts with current frame of 0', () => {
      expect(animation.currentFrame).toEqual(0);
    });
  });

  describe('repositionFrame', () => {
    it('should iterate frameX from 90 to 810', () => {
      for (let i = 1; i < spriteSheetColumns; i++) {
        animation.repositionFrame(spriteSheetWidth, spriteSheetColumns);
        expect(animation.frameX).toEqual(i * spriteSheetWidth / spriteSheetColumns);
      }
    });

    it('should reset frameX to 0 after 810', () => {
      for (let i = 1; i < spriteSheetColumns + 1; i++) {
        animation.repositionFrame(spriteSheetWidth, spriteSheetColumns);
      }
      expect(animation.frameX).toEqual(0);
    });
  });
});

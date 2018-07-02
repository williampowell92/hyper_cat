describe('Animation', () => {
  let animation;
  let spriteFactory;
  let sprite;
  let sheet;

  beforeEach(() => {
    sprite = { sheetWidth: 900, columns: 10, path: 'public/assets/sprite_idle.png' };
    spriteFactory = { build() {} };
    spyOn(spriteFactory, 'build').and.returnValue(sprite);
    sheet = 'idle';
    animation = new Animation(sheet, spriteFactory);
  });

  describe('initialize', () => {
    it('starts with current frame of 0', () => {
      expect(animation.currentFrame).toEqual(0);
    });

    it('creates a new sprite', () => {
      expect(spriteFactory.build).toHaveBeenCalledWith(sheet);
    });
  });

  describe('repositionFrame', () => {
    xit('should iterate frameX from 90 to 810', () => {
      for (let i = 1; i < spriteSheetColumns; i++) {
        animation.repositionFrame(spriteSheetWidth, spriteSheetColumns);
        expect(animation.frameX).toEqual(i * spriteSheetWidth / spriteSheetColumns);
      }
    });

    xit('should reset frameX to 0 after 810', () => {
      for (let i = 1; i < spriteSheetColumns + 1; i++) {
        animation.repositionFrame(spriteSheetWidth, spriteSheetColumns);
      }
      expect(animation.frameX).toEqual(0);
    });
  });
});

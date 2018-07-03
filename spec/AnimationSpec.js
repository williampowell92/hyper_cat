describe('Animation', () => {
  let animation;
  let spriteFactory;
  let sprite;
  let sheet;
  let animationFactory;
  let context;

  beforeEach(() => {
    sprite = {
      sheetWidth: 900,
      columns: 10,
      img: new Image(),
      posOffsetX: 18,
      posOffsetY: 5,
      clippedWidth: 48,
      clippedHeight: 79
    };

    spriteFactory = { build() {} };
    spyOn(spriteFactory, 'build').and.returnValue(sprite);
    sheet = 'idle';
    animationFactory = new AnimationFactory();
    animation = animationFactory.build(sheet, spriteFactory);
    context = jasmine.createSpyObj('context', ['drawImage']);
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
    it('should iterate frameX from 90 to 810', () => {
      for (let i = 1; i < sprite.columns; i++) {
        animation.repositionFrame();
        expect(animation.frameX).toEqual(i * sprite.sheetWidth / sprite.columns);
      }
    });

    it('should reset frameX to 0 after 810', () => {
      for (let i = 1; i < sprite.columns + 1; i++) {
        animation.repositionFrame();
      }
      expect(animation.frameX).toEqual(0);
    });
  });

  describe('draw', () => {
    it('calls drawImage on context with the correct args', () => {
      const gameSize = { x: 800, y: 800 };
      const center = { x: 400, y: 700 };
      const size = { x: 45, y: 72 };
      animation.draw(context, gameSize, center, size);
      expect(context.drawImage).toHaveBeenCalledWith(
        sprite.img,
        animation.frameX + sprite.posOffsetX,
        sprite.posOffsetY,
        sprite.clippedWidth,
        sprite.clippedHeight,
        gameSize.x / 2 - sprite.clippedWidth / 2,
        center.y - size.y / 2,
        size.x,
        size.y
      );
    });
  });
});

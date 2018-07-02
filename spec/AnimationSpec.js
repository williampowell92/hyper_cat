describe('Animation', () => {
  let animation;
  let spriteFactory;
  let sprite;
  let sheet;
  let animationFactory;

  beforeEach(() => {
    sprite = { sheetWidth: 900, columns: 10, path: 'public/assets/sprite_idle.png' };
    spriteFactory = { build() {} };
    spyOn(spriteFactory, 'build').and.returnValue(sprite);
    sheet = 'idle';
    animationFactory = new AnimationFactory();
    animation = animationFactory.build(sheet, spriteFactory);
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
});

// it('calls draw on animation', () => {
//   const gameSize = { x: 800, y: 800 };
//   player.draw(context, undefined, gameSize);
//   expect(context.drawImage).toHaveBeenCalledWith(
//     player.animation.sprite.img,
//     player.animation.frameX,
//     0,
//     player.animation.sprite.sheetWidth / player.animation.sprite.columns,
//     79,
//     gameSize.x / 2 - player.size.x / 2,
//     player.center.y - player.size.y / 2,
//     player.animation.sprite.sheetWidth / player.animation.sprite.columns,
//     79
//   );

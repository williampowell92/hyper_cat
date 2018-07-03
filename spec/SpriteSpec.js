describe('Sprite', () => {
  let sprite;
  let imageFactory;
  let spriteFactory;

  const sheets = {
    idle: {
      width: 900,
      columns: 10,
      src: 'public/assets/sprite_idle.png',
      posOffsetX: 18,
      posOffsetY: 5,
      clippedWidth: 48,
      clippedHeight: 79
    },
    right: {
      width: 517,
      columns: 8,
      src: 'public/assets/sprite_running_right.png',
      posOffsetX: 18,
      posOffsetY: 0,
      clippedWidth: 48,
      clippedHeight: 79
    }
  };

  beforeEach(() => {
    imageFactory = new ImageFactory();
    spyOn(imageFactory, 'build').and.returnValue({});
    spriteFactory = new SpriteFactory();
  });

  describe('initialize', () => {
    describe('idle', () => {
      beforeEach(() => {
        sprite = spriteFactory.build('idle', imageFactory);
      });

      it('stores the sheetWidth', () => {
        expect(sprite.sheetWidth).toEqual(sheets.idle.width);
      });

      it('stores the columns', () => {
        expect(sprite.columns).toEqual(sheets.idle.columns);
      });

      it('stores the src on the image', () => {
        expect(sprite.img.src).toContain(sheets.idle.src.slice(2, -1));
      });

      it('stores the posOffsetX', () => {
        expect(sprite.posOffsetX).toEqual(sheets.idle.posOffsetX);
      });

      it('stores the posOffsetY', () => {
        expect(sprite.posOffsetY).toEqual(sheets.idle.posOffsetY);
      });

      it('stores the clippedWidth', () => {
        expect(sprite.clippedWidth).toEqual(sheets.idle.clippedWidth);
      });

      it('stores the clippedHeight', () => {
        expect(sprite.clippedHeight).toEqual(sheets.idle.clippedHeight);
      });
    });
  });
});
